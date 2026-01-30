<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
     protected $table = 'tools'; // تأكد من اسم الجدول هنا

    // الحقول المسموح تعبئتها (حماية)
    protected $fillable = [
        'name',
        'category',
        'price',
        'desc',
        'long_desc',
        'pros',
        'cons',
        'alternatives',
        'official_link',
        'image',
    ];

    // تحويل JSON تلقائيًا إلى Array
    protected $casts = [
        'pros' => 'array',
        'cons' => 'array',
        'alternatives' => 'array',
    ];
    
}
