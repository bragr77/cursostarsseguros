<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $table = 'videos';

    protected $fillable = [
        'titulo',
        'descripcion',
        'archivo',
        'portada',
        'tema_id',
    ];

    public function temavideo(){
        return $this->belongsTo(Temavideo::class);
    }
}
