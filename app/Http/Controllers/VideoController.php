<?php

namespace App\Http\Controllers;

use App\Models\Temavideo;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videos = Video::all();

        return inertia('Videos/Index', [
            'videos' => $videos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $temas = Temavideo::all();

        return inertia('Videos/Create',[
            'temas' => $temas,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /* dd($request['portada'], $request['archivo']); */

        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
            'tema_id' => 'required',
            'portada' => 'required|mimes:jpg,jpeg,png,gif',
            'archivo' => 'required|mimes:mp4',
        ]);

        $data['portada'] = $filenameportada = time().".".$request['portada']->extension();

        $request->portada->move(public_path("videos/portadas"), $filenameportada);

        $data['archivo'] = $filenamearchivo = time().".".$request['archivo']->extension();

        $request->archivo->move(public_path("videos"), $filenamearchivo);

        /* dd($filenameportada, $filenamearchivo); */

        $video = Video::create([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'tema_id' => $request->tema_id,
            'portada' => $filenameportada,
            'archivo' => $filenamearchivo
        ]);

        $video->save();

        return to_route('cursos.index');

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
        $video = Video::find($id);

        $video->delete();

    }
}
