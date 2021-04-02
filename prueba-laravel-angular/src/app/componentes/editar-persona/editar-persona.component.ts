import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaServiceService } from 'src/app/services/persona-service.service';
import { Persona } from 'src/app/interfaces/persona';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  id:number;
  personas:Persona[];
  persona: Persona = new Persona();
  constructor(private route:ActivatedRoute , private _persona:PersonaServiceService , private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this._persona.getPersona().subscribe((data:Persona[]) => {
      this.personas = data;
      this.persona = this.personas.find((m)=>{return m.id == this.id});
      console.log(this.persona);
    })
  }

  editarPersona(forma:NgForm){
    this._persona.editarPersona(this.persona).subscribe(
      (resp: Persona) => {
        forma.reset();
        Swal.fire({
          icon: 'success',
          title: 'Su registro se ha editado satisfactoriamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/listado']);
      },
    );
  }

}
