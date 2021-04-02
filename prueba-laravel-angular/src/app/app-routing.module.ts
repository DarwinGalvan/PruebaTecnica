import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPersonasComponent } from './componentes/listado-personas/listado-personas.component';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'listado', component:ListadoPersonasComponent},
  {path:'agregarPersonas', component:CrearPersonaComponent},
  {path:'editarPersonas/:id', component:EditarPersonaComponent},
  {path:'login', component:LoginComponent},
  {path:'**',pathMatch:'full',redirectTo:''},
];

export const APPROUTES = RouterModule.forRoot(routes);

