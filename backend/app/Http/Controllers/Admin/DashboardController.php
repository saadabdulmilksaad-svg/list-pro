<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tool;
use App\Models\Admin;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{
    // صفحة لوحة التحكم الرئيسية
    public function index()
    {
        // إحصائيات عامة
        $stats = [
            'total_tools' => Tool::count(),
            'total_categories' => Tool::distinct('category')->count('category'),
            'total_admins' => Admin::count(),
            'active_admins' => Admin::where('is_active', true)->count(),
        ];

        // إحصائيات الأدوات حسب الفئة
        $toolsByCategory = Tool::select('category', DB::raw('count(*) as count'))
            ->groupBy('category')
            ->orderBy('count', 'desc')
            ->get();

        // الأدوات المضافة مؤخراً (آخر 7 أيام)
        $recentTools = Tool::where('created_at', '>=', Carbon::now()->subDays(7))
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        // إحصائيات الإضافة خلال آخر 30 يوم
        $last30Days = Tool::select(
                DB::raw('DATE(created_at) as date'),
                DB::raw('count(*) as count')
            )
            ->where('created_at', '>=', Carbon::now()->subDays(30))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // تحضير بيانات الرسم البياني
        $chartData = [
            'labels' => $last30Days->pluck('date')->map(function($date) {
                return Carbon::parse($date)->format('d M');
            }),
            'data' => $last30Days->pluck('count')
        ];

        // الأدوات الأكثر مشاهدة (لو كان هناك حقل views)
        $popularTools = Tool::orderBy('id', 'desc')->take(5)->get();

        // آخر تسجيل دخول للأدمن
        $recentAdminActivity = Admin::where('is_active', true)
            ->orderBy('updated_at', 'desc')
            ->take(3)
            ->get();

        return view('admin.dashboard', compact(
            'stats',
            'toolsByCategory', 
            'recentTools',
            'chartData',
            'popularTools',
            'recentAdminActivity'
        ));
    }
}
