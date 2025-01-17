<?php

namespace App\Http\Controllers;

use App\Exports\BlockExport;
use App\Models\Lot;
use App\Models\Block;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreBlockRequest;

class BlockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $blocks = Block::query()
                        ->withCount('lots')
                        ->withCount([
                            'lots as sold_lots_count' => function ($q) {
                                $q->where('status', 'Sold');
                            },
                            'lots as installment_lots_count' => function ($q) {
                                $q->where('status', 'Installment');
                            }
                        ])
                        ->filter($request->only(['search']))
                        ->orderBy('block_number')
                        ->get();

        return inertia('Blocks/Index', [
            'blocks' => $blocks,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlockRequest $request)
    {
        Block::create($request->validated());

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Block $block, Request $request)
    {
        $lots = Lot::query()
                    ->whereBelongsTo($block)
                    ->with('block')
                    ->filter($request->only(['search', 'type']))
                    ->get();

        return inertia('Blocks/Show', [
            'block' => $block,
            'lots' => $lots,
            'filters' => $request->only(['search', 'type']),
            'tallies' => [
                'type' => Lot::whereBelongsTo($block)
                            ->select('type',
                                    DB::raw('count(*) as count'),
                                    DB::raw('count(case when status = "Sold" then 1 end) as sold_lots'),
                                    DB::raw('count(case when status = "Installment" then 1 end) as installment_lots'))
                            ->groupBy('type')
                            ->get(),
                'status' => Lot::whereBelongsTo($block)
                            ->select('status', DB::raw('count(*) as count'))
                            ->groupBy('status')
                            ->get(),
            ],
            'lot_types' => Lot::whereBelongsTo($block)->distinct('type')->pluck('type'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Block $block)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreBlockRequest $request, Block $block)
    {
        $block->update($request->validated());

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Block $block)
    {
        $block->delete();

        return redirect()->route('blocks.index');
    }

    /**
     * Export
     */
    public function export(Block $block)
    {
        return (new BlockExport)->for($block)->download("Block {$block->block_number}.xlsx");
    }
}
