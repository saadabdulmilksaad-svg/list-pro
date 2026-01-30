<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ToolController;
use App\Http\Controllers\ToolsController;

// جميع الأدوات
Route::get('/tools', [ToolController::class, 'index']);

// أدوات حسب الفئة
Route::get('/tools/{id}', [ToolController::class, 'show']);

Route::apiResource('tools', ToolsController::class);
