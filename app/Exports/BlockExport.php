<?php

namespace App\Exports;

use App\Models\Block;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;

class BlockExport implements FromView
{
    use Exportable; 

    protected $block;

    public function for($block = null)
    {
        $this->block = $block;

        return $this;
    }

    public function view(): View
    {
        return view('exports.lots', [
            'lots' => $this->block->lots,
        ]);
    }
}
