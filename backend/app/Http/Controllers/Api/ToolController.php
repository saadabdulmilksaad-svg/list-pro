<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tool;

class ToolController extends Controller
{
    public function index()
    {
        $tools = Tool::latest()->get()->map(function ($tool) {
            return [
                'id' => $tool->id,
                'name' => $tool->name,
                'desc' => $tool->desc,
                'category' => $tool->category,
                'price' => $tool->price ?? 'مجاني',
                'image' => $tool->image ? url($tool->image) : null,
                'link' => $tool->official_link,
                'rating' => 4.8, // Default rating for new tools
                'tags' => [$tool->category, 'AI', 'New'], // Default tags
                'features' => $tool->pros ?? ['سهل الاستخدام', 'فعال', 'ذكي'], // Fallback features
                'users' => 'جديد',
            ];
        });
        return response()->json($tools);
    }

    public function show($id)
    {
        $tool = Tool::findOrFail($id);
        
        $data = [
            'id' => $tool->id,
            'name' => $tool->name,
            'desc' => $tool->desc,
            'longDesc' => $tool->long_desc ?? $tool->desc,
            'overview' => $tool->long_desc ?? $tool->desc,
            'category' => $tool->category,
            'price' => $tool->price ?? 'مجاني',
            'image' => $tool->image ? url($tool->image) : null,
            'officialLink' => $tool->official_link,
            
            // Stats & Defaults
            'rating' => 4.8,
            'reviews' => 120,
            'popularity' => 'مرتفع',
            'updatedAt' => $tool->updated_at->format('Y-m-d'),
            'users' => '+1k',
            'platforms' => 'Web, Mobile',
            'difficulty' => 'سهل',
            
            // Links
            'demoLink' => $tool->official_link,
            'docsLink' => $tool->official_link,
            
            // Arrays
            'features' => $tool->pros ?? [],
            'pros' => $tool->pros ?? [],
            'cons' => $tool->cons ?? [],
            
            // Complex Arrays (Transforming simple arrays to objects where needed)
            'alternatives' => collect($tool->alternatives ?? [])->map(function($alt) {
                return ['name' => $alt, 'category' => 'Similar Tool'];
            }),
            'useCases' => [
                ['title' => 'الاستخدام الشخصي', 'description' => 'مثالي للمهام اليومية وتسريع الإنتاجية.'],
                ['title' => 'الشركات الناشئة', 'description' => 'حل اقتصادي وفعال لبدء المشاريع.']
            ],
            'integrations' => ['Slack', 'Discord', 'API'],
            'compatibility' => ['Web', 'Desktop'],
        ];

        return response()->json($data);
    }
}
