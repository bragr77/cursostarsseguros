<?php

namespace App\Http\Controllers;

use App\Models\Temavideo;
use Illuminate\Http\Request;

class TemaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $temas = Temavideo::all();

        return inertia('Temas/Index', [
            'temas' => $temas,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Temas/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre_tema' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
        ]);

        $temavideo = Temavideo::create([
            'nombre_tema' => $request->nombre_tema,
            'descripcion' => $request->descripcion,
        ]);

        $temavideo->save();

        return to_route('temas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function destroy(string $id)
    {
        $tema = Temavideo::find($id);

        $tema->delete();
    }
}
