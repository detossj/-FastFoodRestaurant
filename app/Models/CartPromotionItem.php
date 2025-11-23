<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartPromotionItem extends Model
{
    protected $fillable = [
        'cart_id',
        'promotion_id',
        'quantity',
        'subtotal'
    ];

    
    public function cart() {
        return $this->belongsTo(Cart::class);
    }

    public function promotion() {
        return $this->belongsTo(Promotion::class);
    }
}
