<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tool;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ToolsExport;
use App\Imports\ToolsImport;

/*
|--------------------------------------------------------------------------
| Controller إدارة الأدوات
|--------------------------------------------------------------------------
| هذا الكنترولر مسؤول عن:
| - عرض الأدوات داخل لوحة التحكم
| - إضافة / تعديل / حذف الأدوات
| - البحث والفلترة والتصدير والاستيراد
| - العمليات الجماعية
*/
class ToolController extends Controller
{
    /**
     * عرض جميع الأدوات مع البحث والفلترة
     */
    public function index(Request $request)
    {
        $query = Tool::query();
        
        // البحث بالاسم
        if ($request->search) {
            $query->where('name', 'LIKE', '%' . $request->search . '%');
        }
        
        // الفلترة حسب الفئة
        if ($request->category) {
            $query->where('category', $request->category);
        }
        
        // الفلترة حسب السعر (مدفوع/مجاني)
        if ($request->price_type) {
            if ($request->price_type === 'free') {
                $query->whereNull('price');
            } elseif ($request->price_type === 'paid') {
                $query->whereNotNull('price');
            }
        }
        
        // الترتيب
        $sort = $request->sort ?? 'created_at';
        $direction = $request->direction ?? 'desc';
        $query->orderBy($sort, $direction);
        
        // جلب الفئات للفلترة
        $categories = Tool::distinct('category')->pluck('category');
        
        // جلب الأدوات مع التصفح
        $tools = $query->paginate(15)->withQueryString();
        
        return view('admin.tools.index', compact('tools', 'categories'));
    }

    /**
     * عرض نموذج إضافة أداة جديدة
     */
    public function create()
    {
        $categories = Tool::distinct('category')->pluck('category');
        return view('admin.tools.create', compact('categories'));
    }

    /**
     * حفظ الأداة الجديدة في قاعدة البيانات
     */
    public function store(Request $request)
    {
        // التحقق من البيانات المدخلة
        $request->validate([
            'name'        => 'required|string|max:255|unique:tools,name',
            'category'    => 'required|string|max:100',
            'price'       => 'nullable|string|max:50',
            'desc'        => 'required|string|max:500',
            'long_desc'   => 'nullable|string',
            'pros'        => 'nullable|array',
            'cons'        => 'nullable|array',
            'alternatives'=> 'nullable|array',
            'officialLink'=> 'nullable|url',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], [
            'name.required'        => 'اسم الأداة مطلوب',
            'name.unique'         => 'هذا الاسم مستخدم بالفعل',
            'category.required'    => 'الفئة مطلوبة',
            'desc.required'       => 'الوصف مطلوب',
            'desc.max'            => 'الوصف يجب ألا يتجاوز 500 حرف',
            'image.image'         => 'يجب أن يكون الملف صورة',
            'image.max'           => 'حجم الصورة يجب ألا يتجاوز 2MB',
        ]);

        // تجهيز البيانات للحفظ
        $data = [
            'name'         => $request->name,
            'slug'         => Str::slug($request->name),
            'category'     => $request->category,
            'price'        => $request->price,
            'desc'         => $request->desc,
            'long_desc'    => $request->long_desc,
            'pros'         => $request->pros ? array_filter($request->pros) : null,
            'cons'         => $request->cons ? array_filter($request->cons) : null,
            'alternatives' => $request->alternatives ? array_filter($request->alternatives) : null,
            'official_link' => $request->officialLink,
        ];

        // رفع الصورة إذا وجدت
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . Str::random(10) . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/tools'), $imageName);
            $data['image'] = 'uploads/tools/' . $imageName;
        }

        // حفظ البيانات
        Tool::create($data);

        // رسالة نجاح + رجوع لصفحة الأدوات
        return redirect()
            ->route('admin.tools.index')
            ->with('success', 'تم إضافة الأداة "' . $request->name . '" بنجاح ✅');
    }

    /**
     * عرض تفاصيل أداة محددة
     */
    public function show(Tool $tool)
    {
        return view('admin.tools.show', compact('tool'));
    }

    /**
     * عرض نموذج تعديل أداة
     */
    public function edit(Tool $tool)
    {
        $categories = Tool::distinct('category')->pluck('category');
        return view('admin.tools.edit', compact('tool', 'categories'));
    }

    /**
     * تحديث بيانات الأداة
     */
    public function update(Request $request, Tool $tool)
    {
        // التحقق من البيانات المدخلة
        $request->validate([
            'name'        => 'required|string|max:255|unique:tools,name,' . $tool->id,
            'category'    => 'required|string|max:100',
            'price'       => 'nullable|string|max:50',
            'desc'        => 'required|string|max:500',
            'long_desc'   => 'nullable|string',
            'pros'        => 'nullable|array',
            'cons'        => 'nullable|array',
            'alternatives'=> 'nullable|array',
            'officialLink'=> 'nullable|url',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // تجهيز البيانات للتحديث
        $data = [
            'name'         => $request->name,
            'slug'         => Str::slug($request->name),
            'category'     => $request->category,
            'price'        => $request->price,
            'desc'         => $request->desc,
            'long_desc'    => $request->long_desc,
            'pros'         => $request->pros ? array_filter($request->pros) : null,
            'cons'         => $request->cons ? array_filter($request->cons) : null,
            'alternatives' => $request->alternatives ? array_filter($request->alternatives) : null,
            'official_link' => $request->officialLink,
        ];

        // رفع الصورة الجديدة إذا وجدت
        if ($request->hasFile('image')) {
            // حذف الصورة القديمة
            if ($tool->image && file_exists(public_path($tool->image))) {
                unlink(public_path($tool->image));
            }
            
            $image = $request->file('image');
            $imageName = time() . '_' . Str::random(10) . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/tools'), $imageName);
            $data['image'] = 'uploads/tools/' . $imageName;
        }

        // تحديث البيانات
        $tool->update($data);

        return redirect()
            ->route('admin.tools.index')
            ->with('success', 'تم تحديث الأداة "' . $request->name . '" بنجاح ✅');
    }

    /**
     * حذف أداة
     */
    public function destroy(Tool $tool)
    {
        $toolName = $tool->name;
        
        // حذف الصورة إذا وجدت
        if ($tool->image && file_exists(public_path($tool->image))) {
            unlink(public_path($tool->image));
        }
        
        // حذف الأداة
        $tool->delete();

        return redirect()
            ->route('admin.tools.index')
            ->with('success', 'تم حذف الأداة "' . $toolName . '" بنجاح 🗑️');
    }

    /**
     * العمليات الجماعية (حذف متعدد، نسخ، إلخ)
     */
    public function bulkAction(Request $request)
    {
        $request->validate([
            'action' => 'required|in:delete,export',
            'tools'  => 'required|array',
            'tools'  => 'exists:tools,id',
        ]);

        $toolIds = $request->tools;
        
        if ($request->action === 'delete') {
            $tools = Tool::whereIn('id', $toolIds)->get();
            
            foreach ($tools as $tool) {
                // حذف الصور
                if ($tool->image && file_exists(public_path($tool->image))) {
                    unlink(public_path($tool->image));
                }
            }
            
            Tool::whereIn('id', $toolIds)->delete();
            
            return redirect()
                ->route('admin.tools.index')
                ->with('success', 'تم حذف ' . count($toolIds) . ' أدوات بنجاح 🗑️');
        }
        
        if ($request->action === 'export') {
            return $this->exportSelected($toolIds);
        }
    }

    /**
     * تصدير جميع الأدوات
     */
    public function export()
    {
        try {
            return Excel::download(new ToolsExport, 'tools_' . date('Y-m-d_H-i-s') . '.xlsx');
        } catch (\Exception $e) {
            return redirect()
                ->route('admin.tools.index')
                ->with('error', 'حدث خطأ أثناء التصدير: ' . $e->getMessage());
        }
    }

    /**
     * تصدير أدوات محددة
     */
    private function exportSelected($toolIds)
    {
        try {
            return Excel::download(new ToolsExport($toolIds), 'selected_tools_' . date('Y-m-d_H-i-s') . '.xlsx');
        } catch (\Exception $e) {
            return redirect()
                ->route('admin.tools.index')
                ->with('error', 'حدث خطأ أثناء التصدير: ' . $e->getMessage());
        }
    }

    /**
     * استيراد الأدوات من ملف Excel
     */
    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv|max:10240',
        ]);

        try {
            Excel::import(new ToolsImport, $request->file('file'));
            
            return redirect()
                ->route('admin.tools.index')
                ->with('success', 'تم استيراد الأدوات بنجاح 📥');
        } catch (\Exception $e) {
            return redirect()
                ->route('admin.tools.index')
                ->with('error', 'حدث خطأ أثناء الاستيراد: ' . $e->getMessage());
        }
    }

    /**
     * الحصول على إحصائيات سريعة للأدوات (AJAX)
     */
    public function stats()
    {
        $stats = [
            'total'        => Tool::count(),
            'this_month'   => Tool::whereMonth('created_at', now()->month)->count(),
            'this_week'    => Tool::whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
            'categories'   => Tool::distinct('category')->count('category'),
            'free_tools'   => Tool::whereNull('price')->count(),
            'paid_tools'   => Tool::whereNotNull('price')->count(),
        ];

        return response()->json($stats);
    }
}
