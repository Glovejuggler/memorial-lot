<?php

use Inertia\Inertia;
use App\Models\Block;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\LotController;
use App\Http\Controllers\BlockController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);

    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'blocks' => Block::count(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/blocks', [BlockController::class, 'index'])->name('blocks.index');
    Route::post('/blocks/store', [BlockController::class, 'store'])->name('blocks.store');
    Route::get('/blocks/{block}', [BlockController::class, 'show'])->name('blocks.show');
    Route::put('/block/{block}', [BlockController::class, 'update'])->name('blocks.update');
    Route::delete('/block/{block}', [BlockController::class, 'destroy'])->name('blocks.destroy');

    Route::get('/lots', [LotController::class, 'index'])->name('lots.index');
    Route::post('/lots/store', [LotController::class, 'store'])->name('lots.store');
    Route::put('/lot/{lot}', [LotController::class, 'update'])->name('lots.update');
    Route::delete('/lot/{lot}', [LotController::class, 'destroy'])->name('lots.destroy');
});

require __DIR__.'/auth.php';
