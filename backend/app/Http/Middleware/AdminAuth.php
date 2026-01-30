<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuth
{
    /**
     * هذا الميدل وير مسؤول عن حماية لوحة التحكم
     * يمنع أي شخص غير مسجل كأدمن من الدخول
     */
    public function handle(Request $request, Closure $next)
    {
        // التحقق من أن الأدمن مسجل دخوله بالفعل
        if (!Auth::guard('admin')->check()) {
            return redirect('/admin/login')->with('error', 'يجب تسجيل الدخول أولاً');
        }

        // التحقق من أن الأدمن نشط
        if (!Auth::guard('admin')->user()->is_active) {
            Auth::guard('admin')->logout();
            return redirect('/admin/login')->with('error', 'حسابك معطل،请联系 الإدارة');
        }

        // لو مسموح → نكمل الطلب
        return $next($request);
    }
}
