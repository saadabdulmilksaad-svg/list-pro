<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable; // مهم عشان نقدر نسوي Login
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $guard = 'admin'; // حددنا الـ guard الخاص بالأدمن

    protected $fillable = [
        'name', 
        'email', 
        'password', 
        'avatar', 
        'is_active',
        'email_verified_at'
    ]; // الحقول القابلة للملء

    protected $hidden = ['password', 'remember_token']; // نخفي كلمة المرور عند عرض البيانات

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean',
    ];

    // تلقائي تشفير كلمة المرور عند الحفظ
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}
