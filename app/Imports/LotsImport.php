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
        return new Lot([
            'block_id' => Block::where('block_number', $row['blk'])->first()->id,
            'contract_number' => $row['cn'],
            'owner' => $row['name'],
            'lot_number' => $row['lot'],
            'price' => 0,
            'id' => Str::uuid(),
        ]);
    }

    public function rules(): array
    {
        return [
            '*.blk' => ['required', Rule::in([1,2,3,4,5,6,7,8,9,10,11])],
            '*.cn' => ['nullable','unique:lots,contract_number'],
            '*.name' => ['nullable'],
            '*.lot' => ['required']
        ];
    }

    public function batchSize(): int
    {
        return 1000;
    }
}
