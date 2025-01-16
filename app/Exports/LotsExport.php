<?php

namespace App\Exports;

use App\Models\Lot;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class LotsExport implements FromView
{
    public function view(): View
    {
        return view('exports.lots', [
            'lots' => Lot::all()
        ]);
    }
}
