<?php

namespace App\Http\Controllers;

use App\Models\Infocliente;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /* $usuario = auth()->user(); */

        $users = User::with('infocliente')->Where('role_id', 3)->get();

        return inertia('Clientes/Index',[
           /*  'usuario'  => $usuario, */
            'users'  => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Clientes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            /* 'password' => ['required', 'confirmed', Rules\Password::defaults()], */
            'fechan' => 'required|string',
            'telefono' => 'required|string',
            'direccion' => 'required|string',
        ]);

        $password = Str::random(8);
        $hashedPassword = Hash::make($password);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'role_id' => 3,
            'email' => $request->email,
            'password' => $hashedPassword,
        ]);

        event(new Registered($user));

        $infocliente = new Infocliente([
            'fechan' => $request->fechan,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
        ]);

        $user->infocliente()->save($infocliente);

        /* Enviar por telegram */
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        date_default_timezone_set('America/Guatemala');

        $token = "6611079081:AAFiHn5ZiIgF9hJB8gmP0mufPi-uAi_vK-Q"; // mi bot

$telegrammensaje = "Se produjo un registro de cliente

<b>Cliente:</b> $request->name $request->lastname,
<b>Email:</b> $request->email,
<b>Contraseña:</b>: $password";

        $datos = [
            //'chat_id' => '1004069284', // ID del Negrito
            'chat_id' => '1118397735', // Mi ID
            #'chat_id' => '@el_canal si va dirigido a un canal',
            'text' => "$telegrammensaje",
            'parse_mode' => 'HTML' #formato del mensaje
        ];
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot" . $token . "/sendMessage");
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $datos);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $r_array = json_decode(curl_exec($ch), true);

        return to_route('clientes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);

        $info = $user->infocliente;

        return inertia('Clientes/Show',[
            'user' => $user,
            'info' => $info,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();
    }
}
