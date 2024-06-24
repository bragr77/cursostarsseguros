<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $usuario = auth()->user();
        $role = $usuario->role_id;

        $clientecount = User::where('role_id', 3)->count();

        if ($role !== 3) {
            $users = User::with('infocliente')->Where('role_id', 3)->get();

            return inertia('Home/DashboardAdmin',[
                'usuario'  => $usuario,
                'users'  => $users,
                'clientecount' => $clientecount
            ]);

        }else{
            return inertia('Home/DashboardClient',[
                'usuario'  => $usuario,
            ]);
        }

    }
}
