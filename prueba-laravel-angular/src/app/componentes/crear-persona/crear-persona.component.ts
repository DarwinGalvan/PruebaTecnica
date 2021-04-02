import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from 'src/app/services/persona-service.service';
import { NgForm, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import Swal from 'sweetalert2'

declare var $:any;
@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  Persona:any = {};
  personas:any = [];
  error=[];
  formulario: FormGroup;

  constructor( private _crear:PersonaServiceService, private router:Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      correo: new FormControl("",[Validators.email]),
      cedula: new FormControl ("", [Validators.pattern("^[0-9]*$"),]),
      telefono: new FormControl ("", [Validators.pattern("^[0-9]*$"),]),
    })

  }

  ngOnInit() {
  }

  guardarPersona(){
      this.error=[];
      var nuevo = new Persona();
      nuevo.nombres = this.formulario.value.nombre;
      nuevo.apellidos = this.formulario.value.apellidos;
      nuevo.cedula = this.formulario.value.cedula;
      nuevo.correo = this.formulario.value.correo;
      nuevo.telefono = this.formulario.value.telefono;
      this._crear.nuevaPersona(nuevo).subscribe(
        (resp: Persona) => {
          this.formulario.reset();
          Swal.fire({
            icon: 'success',
            title: 'Su registro se ha guardado satisfactoriamente',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigate(['/listado']);
        }, error => {
            Object.keys(error.error.errors).map((key) => {
              error.error.errors[key].forEach(element => {
              this.error.push(element);
            });
          });
        }
      );
    }


}
