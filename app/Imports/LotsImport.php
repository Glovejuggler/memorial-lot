<?php

namespace App\Imports;

use App\Models\Lot;
use App\Models\Block;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithBatchInserts;

class LotsImport implements ToModel, WithValidation, WithHeadingRow, WithBatchInserts, SkipsEmptyRows, SkipsOnFailure
{
    use Importable, SkipsFailures;
    
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $blockId = Block::where('block_number', $row['blk'])->first()->id;

        $exists = Lot::where('block_id', $blockId)->where('lot_number', $row['lot'])->exists();

        if (!$exists) {
            return new Lot([
                'block_id' => $blockId,
                'contract_number' => $row['cn'] ?? null,
                'owner' => $row['name'] ?? $row['name_of_purchaser'] ?? null,
                'lot_number' => $row['lot'],
                'price' => isset($row['price']) ? $row['price'] : 0,
                'id' => Str::uuid(),
                'contact' => isset($row['contact']) ? $row['contact'] : null,
                'address' => isset($row['address']) ? $row['address'] : null,
                'type' => isset($row['type']) ? $row['type'] : (isset($row['category']) ? $row['category'] : null),
                'status' => $row['status'] ?: null,
            ]);
        }

        $existing = Lot::where('block_id', $blockId)->where('lot_number', $row['lot'])->first();
        
        $existing->update([
            'contract_number' => $row['cn'] ?? $existing->contract_number,
            'owner' => $row['name'] ?? $row['name_of_purchaser'] ?? $existing->owner,
            'price' => isset($row['price']) ? $row['price'] : $existing->price,
            'contact' => isset($row['contact']) ? $row['contact'] : $existing->contact,
            'address' => isset($row['address']) ? $row['address'] : $existing->address,
            'type' => isset($row['type']) ? $row['type'] : (isset($row['category']) ? $row['category'] : $existing->type),
            'status' => $row['status'] ?: $existing->status,
        ]);

        return null;
    }

    public function rules(): array
    {
        return [
            '*.blk' => ['required', 'exists:blocks,block_number'],
            '*.cn' => ['nullable','unique:lots,contract_number'],
            '*.name' => ['nullable'],
            '*.lot' => ['required'],
            '*.contact' => ['nullable'],
            '*.address' => ['nullable'],
            '*.price' => ['nullable'],
            '*.type' => ['nullable'],
        ];
    }

    public function batchSize(): int
    {
        return 1000;
    }
}
