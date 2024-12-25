<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['lot_number', 'control_number', 'block_id', 'price', 'owner'];
}
