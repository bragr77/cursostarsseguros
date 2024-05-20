<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Infocliente extends Model
{
    use HasFactory;

    protected $table = 'infoclientes';

    protected $fillable = [
        'user_id',
        'fechan',
        'telefono',
        'direccion',
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }
}
