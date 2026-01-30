<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use App\Models\Admin;

class AuthController extends Controller
{
    // عرض صفحة تسجيل الدخول
    public function showLogin()
    {
        // لو الأدمن مسجل دخوله بالفعل → نوجهه للوحة التحكم
        if (Auth::guard('admin')->check()) {
            return redirect('/admin/dashboard');
        }
        
        return view('admin.login');
    }

    // عملية تسجيل الدخول
    public function login(Request $request)
    {
        // التحقق من صحة البيانات مع رسائل خطأ مخصصة
        $credentials = $request->validate([
            'email' => ['required','email'],
            'password' => ['required','min:6']
        ], [
            'email.required' => 'البريد الالكتروني مطلوب',
            'email.email' => 'صيغة البريد غير صحيحة',
            'password.required' => 'كلمة المرور مطلوبة',
            'password.min' => 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
        ]);

        // حماية من محاولات التسجيل المتكررة
        $key = 'admin_login_' . $request->ip();
        if (RateLimiter::tooManyAttempts($key, 5)) {
            $seconds = RateLimiter::availableIn($key);
            return back()->withErrors([
                'email' => 'محاولات كثيرة، حاول مرة أخرى بعد ' . $seconds . ' ثانية'
            ])->onlyInput('email');
        }

        // محاولة تسجيل الدخول عبر guard الأدمن
        if(Auth::guard('admin')->attempt($credentials, $request->boolean('remember'))) {
            RateLimiter::clear($key); // مسح محاولات الفشل
            
            $request->session()->regenerate(); // حماية من هجمات الـ Session Hijacking
            
            // تسجيل نشاط الدخول
            // activity()->log('الأدمن ' . Auth::guard('admin')->user()->name . ' قام بتسجيل الدخول');
            
            return redirect()->intended('/admin/dashboard'); // Redirect ذكي بعد login
        }

        // زيادة عدد المحاولات الفاشلة
        RateLimiter::hit($key);

        // لو فشل تسجيل الدخول، رسالة خطأ
        return back()->withErrors([
            'email' => 'البريد الالكتروني أو كلمة المرور غير صحيحة',
        ])->onlyInput('email'); // نحتفظ بالبريد المدخل
    }

    // تسجيل الخروج
    public function logout(Request $request)
    {
        // تسجيل نشاط الخروج
        if (Auth::guard('admin')->check()) {
            activity()->log('الأدمن ' . Auth::guard('admin')->user()->name . ' قام بتسجيل الخروج');
        }

        Auth::guard('admin')->logout();
        $request->session()->invalidate(); // حذف جميع الجلسات
        $request->session()->regenerateToken(); // منع CSRF

        return redirect('/admin/login')->with('success', 'تم تسجيل الخروج بنجاح');
    }
}
