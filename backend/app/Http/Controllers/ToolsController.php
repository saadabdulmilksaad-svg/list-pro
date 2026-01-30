<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Http\Request;

class ToolsController extends Controller
{
    // 1) عرض كل الأدوات
    public function index()
    {
        return Tool::all(); // يرجع جميع الأدوات
    }

    // 2) إنشاء أداة جديدة
    public function store(Request $request)
    {
        // التحقق من المدخلات
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
            'desc' => 'required',
            'longDesc' => 'required',
            'image' => 'required',
        ]);

        // إنشاء الأداة
        $tool = Tool::create($request->all());

        return response()->json($tool, 201); // 201 يعني تم الإنشاء بنجاح
    }

    // 3) عرض أداة واحدة حسب id
    public function show($id)
    {
        $tool = Tool::find($id);

        if (!$tool) {
            return response()->json(['message' => 'Tool not found'], 404);
        }

        return $tool;
    }

    // 4) تحديث أداة
    public function update(Request $request, $id)
    {
        $tool = Tool::find($id);

        if (!$tool) {
            return response()->json(['message' => 'Tool not found'], 404);
        }

        $tool->update($request->all());

        return response()->json($tool, 200);
    }

    // 5) حذف أداة
    public function destroy($id)
    {
        $tool = Tool::find($id);

        if (!$tool) {
            return response()->json(['message' => 'Tool not found'], 404);
        }

        $tool->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
