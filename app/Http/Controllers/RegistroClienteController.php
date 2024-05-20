<?php

namespace App\Http\Controllers;

use App\Models\Infocliente;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;

class RegistroClienteController extends Controller
{
    public function create()
    {
        return inertia('Registro/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'fechan' => 'required|string',
            'telefono' => 'required|string',
            'direccion' => 'required|string',
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'role_id' => 3,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $infocliente = new Infocliente([
            'fechan' => $request->fechan,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
        ]);

        $user->infocliente()->save($infocliente);

         return to_route('login');
    }
}
