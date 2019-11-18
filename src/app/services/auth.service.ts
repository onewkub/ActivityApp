import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = environment.apiUrl;
  constructor(public http : HttpClient) { }
  
  async tryLogin(data : {email: string, password: string}){
    return this.http.post(`${this.rootURL}/login`, data).toPromise();
    // .subscribe(
    //   res => console.log(res['data']),
    //   error => console.log(error.error.errors)
    // );
  }
  async tryRegister(data){
    return this.http.post(`${this.rootURL}/register`, data).toPromise();

  }

}
