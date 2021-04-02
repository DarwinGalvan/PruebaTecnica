import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
url = "api/prueba";
urlLogin = "api/login";
headers = new Headers({'content-type':'application/json'});

httpOptions = {
  headers: new HttpHeaders({
    "Authorization": "Token " + localStorage.getItem("token")
  })
};

  constructor(private http:HttpClient) { }

  login(dato : any) {   
    return this.http.post(this.urlLogin, dato);
  }

  getPersona(){
    let url = this.url;
    return this.http.get(url, this.httpOptions);
  }

  nuevaPersona(dato : any) {
    return this.http.post(this.url, dato,this.httpOptions);
  }

  editarPersona(dato:any){
    return this.http.put(`${this.url}/${dato.id}`, dato, this.httpOptions);
  }

}
