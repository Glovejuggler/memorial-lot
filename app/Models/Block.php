<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Block extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['control_number', 'block_number', 'name', 'uuid'];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('control_number', 'like', "%$search%")
                        ->orWhere('block_number', 'like', "%$search%")
                        ->orWhere('name', 'like', "%$search%");
            });
        });
    }

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class)->orderBy('owner', 'asc');
    }
}
