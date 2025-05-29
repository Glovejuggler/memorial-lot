<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Lot;
use App\Models\Block;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function index()
    {
        $months = DB::table('lots')
                        ->select(
                            DB::raw('DISTINCT YEAR(date_sold) as year'),
                            DB::raw('MONTH(date_sold) as month'),
                            DB::raw('COUNT(*) as lots_sold'),
                            DB::raw('SUM(price) as sales')
                        )
                        ->whereNotNull('date_sold')
                        ->groupBy('year', 'month')
                        ->orderBy('year', 'desc')
                        ->orderBy('month', 'desc')
                        ->get();
                    
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
            'tallies' => [
                'type' => Lot::whereBetween('date_sold', [$startDate, $endDate])
                            ->select('type', DB::raw('count(*) as count'))
                            ->groupBy('type')
                            ->get(),
            ],
            'total_sales' => $sold_lots->sum('price')
        ]);
    }
}
