<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temavideo extends Model
{
    use HasFactory;

    protected $table = 'temavideos';

    protected $fillable = [
        'nombre_tema',
        'descripcion',
    ];

    public function video(){
        return $this->hasOne(Video::class);
    }
}
