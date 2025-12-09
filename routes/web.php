<?php

use Illuminate\Support\Facades\Route;

// Si empieza con /api no se captura y deja que vaya las rutas de la api
Route::get('{any}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$');
