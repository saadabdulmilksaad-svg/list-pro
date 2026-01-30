<?php

use App\Models\Admin;

Admin::create([
    'name' => 'Admin Name',
    'email' => 'admin@example.com',
    'password' => bcrypt('password')
]);

echo "Admin user created successfully!\n";
echo "Email: admin@example.com\n";
echo "Password: password\n";
