<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $usuario = auth()->user();
        $role = $usuario->role_id;

        $clientecount = User::where('role_id', 3)->count();

        $videoscount = Video::all()->count();

        if ($role !== 3) {
            $users = User::with('infocliente')->Where('role_id', 3)->get();

            return inertia('Home/DashboardAdmin',[
                'usuario'  => $usuario,
                'users'  => $users,
                'clientecount' => $clientecount,
                'videoscount' => $videoscount,
            ]);

        }else{
            return inertia('Home/DashboardClient',[
                'usuario'  => $usuario,
            ]);
        }

    }
}
