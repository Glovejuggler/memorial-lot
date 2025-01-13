<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Lot;
use App\Models\User;
use App\Models\Block;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
        ]);

        // Block::factory()->count(50)->create();
        $blocks = 11;
        for ($i = 1; $i <= $blocks; $i++) {
            Block::create([
                'name' => "Block $i",
                'block_number' => $i
            ]);
        }

        $lots = [342,703,0,920,0,227,0,795,50,0,56];

        for ($i = 0; $i < 11; $i++) {
            $b = Block::where('block_number', $i+1)->first()->id;

            for ($j = 1; $j <= $lots[$i]; $j++) {
                Lot::create([
                    'lot_number' => $j,
                    'block_id' => $b,
                ]);
            }
        }
    }
}
