<?php

namespace App\Http\Controllers;

use App\Models\Block;
use Illuminate\Http\Request;
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
                        ->withCount(['lots as acquired_lots_count' => function ($q) {
                            $q->whereNotNull('owner');
                        }])
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
    public function show(Block $block)
    {
        return inertia('Blocks/Show', [
            'block' => $block,
            'lots' => $block->lots
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
}
