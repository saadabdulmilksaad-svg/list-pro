<?php

use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     */public function up(): void
{
    Schema::create('tools', function (Blueprint $table) {
        $table->id(); // رقم الأداة
        $table->string('name'); // اسم الأداة
        $table->string('slug')->unique(); // Slug for URL
        $table->string('category'); // الفئة (نصوص - صور...)
        $table->string('price')->nullable(); // السعر
        $table->text('desc'); // وصف قصير
        $table->longText('long_desc')->nullable(); // وصف طويل
        $table->json('pros')->nullable(); // المميزات
        $table->json('cons')->nullable(); // العيوب
        $table->json('alternatives')->nullable(); // البدائل
        $table->string('official_link')->nullable(); // الموقع الرسمي
        $table->string('image')->nullable(); // صورة
        $table->string('officialLink')->nullable(); // الموقع الرسمي
        $table->timestamps(); // created_at / updated_at
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tools');
    }
};
