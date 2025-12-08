<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function productsByCategory($categoryId) {

        $data = Product::where('category_id', $categoryId)->get();

        if ($data->isEmpty()) return response()->json(['message' => 'Categoría no encontrada'], 404);

        return response()->json($data, 200);
    }
}
