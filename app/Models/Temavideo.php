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
        return $this->hasMany(Video::class, 'tema_id');
    }
}
