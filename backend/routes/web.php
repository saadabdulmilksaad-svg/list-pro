<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\ToolController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('admin')->group(function () {

    // صفحة تسجيل الدخول
    Route::get('/login', [AuthController::class,'showLogin'])->name('admin.login');
    Route::post('/login', [AuthController::class,'login'])->name('admin.login.post');

    // تسجيل الخروج
    Route::post('/logout', [AuthController::class,'logout'])->name('admin.logout');

    // صفحة Dashboard خاصة بالأدمن فقط
    Route::middleware('admin')->group(function () {
        
        // الرئيسية - Dashboard
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

        // CRUD الأدوات - إدارة الأدوات بالكامل
        Route::prefix('tools')->name('admin.tools.')->group(function () {
            
            // عرض جميع الأدوات مع البحث والفلترة
            Route::get('/', [ToolController::class, 'index'])->name('index');
            
            // عرض نموذج إضافة أداة جديدة
            Route::get('/create', [ToolController::class, 'create'])->name('create');
            
            // حفظ الأداة الجديدة
            Route::post('/', [ToolController::class, 'store'])->name('store');
            
            // عرض تفاصيل أداة محددة
            Route::get('/{tool}', [ToolController::class, 'show'])->name('show');
            
            // عرض نموذج تعديل أداة
            Route::get('/{tool}/edit', [ToolController::class, 'edit'])->name('edit');
            
            // تحديث بيانات الأداة
            Route::put('/{tool}', [ToolController::class, 'update'])->name('update');
            
            // حذف أداة
            Route::delete('/{tool}', [ToolController::class, 'destroy'])->name('destroy');
            
            // عمليات جماعية (حذف متعدد، نسخ، إلخ)
            Route::post('/bulk', [ToolController::class, 'bulkAction'])->name('bulk');
            
            // تصدير الأدوات
            Route::get('/export', [ToolController::class, 'export'])->name('export');
            
            // استيراد الأدوات
            Route::post('/import', [ToolController::class, 'import'])->name('import');
        });

        // إدارة المستخدمين (لو كان هناك نظام مستخدمين)
        Route::prefix('users')->name('admin.users.')->group(function () {
            Route::get('/', function () {
                return view('admin.users.index');
            })->name('index');
            
            Route::get('/create', function () {
                return view('admin.users.create');
            })->name('create');
        });

        // الإعدادات العامة
        Route::prefix('settings')->name('admin.settings.')->group(function () {
            Route::get('/', function () {
                return view('admin.settings.general');
            })->name('general');
            
            Route::get('/security', function () {
                return view('admin.settings.security');
            })->name('security');
            
            Route::get('/appearance', function () {
                return view('admin.settings.appearance');
            })->name('appearance');
        });

        // التقارير والإحصائيات
        Route::prefix('reports')->name('admin.reports.')->group(function () {
            Route::get('/', function () {
                return view('admin.reports.index');
            })->name('index');
            
            Route::get('/tools', function () {
                return view('admin.reports.tools');
            })->name('tools');
            
            Route::get('/users', function () {
                return view('admin.reports.users');
            })->name('users');
        });

        // الملف الشخصي للأدمن
        Route::prefix('profile')->name('admin.profile.')->group(function () {
            Route::get('/', function () {
                return view('admin.profile.show');
            })->name('show');
            
            Route::get('/edit', function () {
                return view('admin.profile.edit');
            })->name('edit');
            
            Route::put('/', function () {
                // تحديث الملف الشخصي
                return back()->with('success', 'تم تحديث الملف الشخصي بنجاح');
            })->name('update');
        });
    });
});