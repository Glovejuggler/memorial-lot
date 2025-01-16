<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lot extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['lot_number', 'contract_number', 'block_id', 'price', 'owner', 'id', 'address', 'contact', 'type', 'status'];

    public function block(): BelongsTo
    {
        return $this->belongsTo(Block::class, 'block_id', 'id');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('contract_number', 'like', "%$search%")
                        ->orWhere('lot_number', 'like', "%$search%")
                        ->orWhere('owner', 'like', "%$search%")
                        ->orWhereHas('block', function ($q) use ($search) {
                            $q->where('block_number','like', "%$search%");
                        });
            });
        })->when($filters['status'] ?? null, function ($query, $status) {
            if ($status == 'sold') {
                $query->where('status', 'Sold');
            } elseif ($status == 'installment') {
                $query->where('status', 'Installment');
            } elseif ($status == 'available') {
                $query->whereNull('status');
            }
        })->when($filters['type'] ?? null, function ($query, $type) {
            if ($type != 'any') {
                $query->where('type', $type == 'none' ? null : $type);
            }
        });
    }
}
