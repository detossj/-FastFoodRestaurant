<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function allProducts()
    {
        return response()->json(Product::all(), 200);
    }

}
