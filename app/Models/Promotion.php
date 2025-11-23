<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'start_date',
        'end_date',
        'image_url',
        'available'
    ];

    public function orderPromotionItems() {
        return $this->hasMany(OrderPromotionItem::class);
    }

    public function cartPromotionItems() {
        return $this->hasMany(CartPromotionItem::class);
    }

    public function items()
    {
        return $this->hasMany(PromotionItem::class);
    }

}
