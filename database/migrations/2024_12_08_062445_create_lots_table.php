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
        Schema::create('lots', function (Blueprint $table) {
            $table->uuid('id');
            $table->foreignUuid('block_id')->constrained('blocks', 'id')->onDelete('cascade');
            $table->string('contract_number')->nullable();
            $table->string('lot_number');
            $table->decimal('price', 11, 2)->nullable();
            $table->string('address')->nullable();
            $table->string('contact')->nullable();
            $table->string('owner')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lots');
    }
};
