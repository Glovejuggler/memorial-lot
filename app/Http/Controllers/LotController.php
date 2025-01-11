<?php

namespace App\Http\Controllers;

use App\Models\Lot;
use App\Models\Block;
use App\Imports\LotsImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Requests\StoreNewLotRequest;

class LotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $lots = Lot::query()
                        ->with('block')
                        ->filter($request->only(['search']))
                        ->get();

        return inertia('Lots/Index', [
            'lots' => $lots,
            'filters' => $request->only(['search']),
            'blocks' => Block::orderBy('block_number')->get(),
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
    public function store(StoreNewLotRequest $request)
    {
        Lot::create($request->validated());

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Lot $lot)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lot $lot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreNewLotRequest $request, Lot $lot)
    {
        $lot->update($request->validated());

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lot $lot)
    {
        $lot->delete();

        return redirect()->back();
    }

    /**
     * Import
     */
    public function import(Request $request)
    {
        // dd($request->file('file'));

        // Excel::import(new LotsImport, $request->file('file'));
        $import = new LotsImport;
        $import->import($request->file('file'));

        // if ($import->failures()) {
        //     dd($import->failures()[164]);
        // }

        return redirect()->back();
    }
}
