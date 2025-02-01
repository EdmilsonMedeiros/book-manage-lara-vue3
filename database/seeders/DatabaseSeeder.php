<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([AuthorsSeeder::class]);
        $this->call([PermissionSeeder::class]);

        $john = User::factory()->create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => Hash::make('12345678')
        ]);
        
        $john->givePermissionTo('admin');

        User::factory()->create([
            'name' => 'Peter Parker',
            'email' => 'peterparker@example.com',
            'password' => Hash::make('87654321')
        ]);

        
    }
}
