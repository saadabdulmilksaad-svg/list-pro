<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // اسم الأدمن
            $table->string('email')->unique(); // البريد الإلكتروني فريد
            $table->timestamp('email_verified_at')->nullable(); // تأكيد البريد
            $table->string('password'); // كلمة المرور
            $table->string('avatar')->nullable(); // صورة الملف الشخصي
            $table->boolean('is_active')->default(true); // حالة الأدمن
            $table->rememberToken(); // تذكر الجلسة
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
