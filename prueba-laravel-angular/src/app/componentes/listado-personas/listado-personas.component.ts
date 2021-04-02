import { Component, OnInit } from '@angular/core';
import {PersonaServiceService} from "src/app/services/persona-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
personas:any = [];

  constructor(private _persona:PersonaServiceService) { }

  ngOnInit() {
    this._persona.getPersona().subscribe(data => {
      this.personas = data;
      console.log('listado: ',this.personas);
    })
  }
}
