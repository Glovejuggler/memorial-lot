<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Lot;
use App\Models\Block;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function index()
    {
        $months = Lot::whereNotNull('date_sold')
                    ->get()
                    ->map(function ($row) {
                        $date = Carbon::parse($row->date_sold);

                        return [
                            'year' => $date->year,
                            'month' => $date->month,
                            'label' => $date->format('F Y')
                        ];
                    });
                    
        return inertia('Report/Index', [
            'months' => $months
        ]);
    }

    public function show(Request $request)
    {
        $month = $request->get('month', now()->month);
        $year = $request->get('year', now()->year);

        $startDate = Carbon::create($year, $month, 1)->startOfMonth();
        $endDate = Carbon::create($year, $month, 1)->endOfMonth();

        $sold_lots = Lot::query()
                        ->whereBetween('date_sold', [$startDate, $endDate])
                        ->with('block')
                        ->filter($request->only(['search', 'type', 'status']))
                        ->orderBy('block_id')
                        ->get();

        return inertia('Report/Show', [
            'lots' => $sold_lots,
            'filters' => $request->only(['search', 'type', 'status']),
            'blocks' => Block::orderBy('block_number')->get(),
            'lot_types' => Lot::distinct('type')->pluck('type'),
        ]);
    }
}
