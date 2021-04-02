<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PruebaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombres' => 'min:3|max:120|required',
            'apellidos' => 'min:3|max:120|required',
            'correo' => 'required|unique:pruebas|email',
            'cedula' => 'required|unique:pruebas|numeric',
            'telefono' => 'required|unique:pruebas|numeric',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'nombres.required' => 'El nombre del usuario es requerido',
            'nombres.min' => 'El nombre del usuario debe tener mas de 3 caracteres',
            'nombres.max' => 'El nombre del usuario no debe tener mas de 120 caracteres',
            'apellidos.required' => 'El apellido del usuario es requerido',
            'apellidos.min' => 'El apellido del usuario debe tener mas de 3 caracteres',
            'apellidos.max' => 'El apellido del usuario no debe tener mas de 120 caracteres',
            'cedula.unique' => 'La cedula que esta intentado ingresar ya existe en nuestro sistema',
            'correo.unique' => 'Correo ya existe en nuestro sistema',
            'correo.email' => 'El correo no es correcto',
            'correo.required' => 'El correo es requerido',
            'cedula.numeric' => 'El campo cedula no puede llevar letras',
            'telefono.numeric' => 'El campo telefono  no puede llevar letras',
            'cedula.required' => 'El cedula del usuario es requerido',
            'telefono.required' => 'El telefono del usuario es requerido',
        ];
    }
}
