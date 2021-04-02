<?php

namespace App\Http\Controllers;

use App\prueba;
use App\Http\Requests\PruebaRequest;
use Illuminate\Http\Request;

class PruebaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prueba = prueba::get();
        echo json_encode($prueba);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PruebaRequest $request)
    {
        $prueba = new prueba;
        $prueba->nombres = $request->post('nombres');
        $prueba->apellidos = $request->post('apellidos');
        $prueba->cedula = $request->post('cedula');
        $prueba->correo = $request->post('correo');
        $prueba->telefono = $request->post('telefono');
        $prueba->save();

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\prueba  $prueba_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $prueba_id)
    {
        $prueba = prueba::find($prueba_id);
        $prueba->nombres = $request->post('nombres');
        $prueba->apellidos = $request->post('apellidos');
        $prueba->cedula = $request->post('cedula');
        $prueba->correo = $request->post('correo');
        $prueba->telefono = $request->post('telefono');
        $prueba->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\prueba  $prueba_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($prueba_id)
    {
        $prueba = prueba::find($prueba_id);
        $prueba->delete();
    }
}
