<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::get('/', function () {
    return view('react');
});
Route::get('/api/data', [ApiController::class, 'getData']);