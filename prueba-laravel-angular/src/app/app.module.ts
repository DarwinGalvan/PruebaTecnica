import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APPROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPersonasComponent } from './componentes/listado-personas/listado-personas.component';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { PersonaServiceService } from './services/persona-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonasComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APPROUTES
  ],
  providers: [PersonaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
