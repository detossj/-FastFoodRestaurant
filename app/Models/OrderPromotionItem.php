<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderPromotionItem extends Model
{
    protected $fillable = [
        'order_id',
        'promotion_id',
        'quantity',
        'price',
        'subtotal'
    ];

    public function order() {
        return $this->belongsTo(Order::class);
    }

    public function promotion() {
        return $this->belongsTo(Promotion::class);
    }
}
