<?php

namespace App\Http\Controllers;

use App\Models\Infocliente;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;

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
