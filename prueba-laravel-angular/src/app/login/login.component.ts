import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaServiceService } from 'src/app/services/persona-service.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  Login:any = {};
  error=[];

  constructor(private _login:PersonaServiceService, private router:Router) {
    this.formulario = new FormGroup({      
      email: new FormControl("",[Validators.email]),
      password: new FormControl ("", [Validators.required]),      
    })

   }

  ngOnInit() {  
    
  }
  public login(){
      let token;
      this.error=[];
      var nuevo =  new Login();
      nuevo.email = this.formulario.value.email;
      nuevo.password = this.formulario.value.password;       
      this._login.login(nuevo).subscribe(  
        (resp ) => {
          token = resp;
          console.log(token);
          localStorage.setItem("token", token.token); 
          this.router.navigate(['listado']);
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
