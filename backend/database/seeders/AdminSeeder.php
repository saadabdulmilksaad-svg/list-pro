<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $email = 'admin@bool.com';
        $password = 'password123';

        $admin = Admin::where('email', $email)->first();

        if (!$admin) {
            Admin::create([
                'name' => 'Bool Admin',
                'email' => $email,
                'password' => $password, // Password mutator in Admin model will bcrypt this
                'is_active' => true,
            ]);
            $this->command->info("Admin user created successfully.");
        } else {
            // Update password if user exists
            $admin->password = $password; // This triggers the mutator
            $admin->is_active = true;
            $admin->save();
            $this->command->info("Admin user updated successfully.");
        }

        $this->command->info("Email: $email");
        $this->command->info("Password: $password");
    }
}
