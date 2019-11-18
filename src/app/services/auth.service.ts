import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = environment.apiUrl;
  rlt : any;
  constructor(public http : HttpClient) { }
  
  async tryLogin(data){
    console.log(`${this.rootURL}/login`);
    await this.http.post(`${this.rootURL}/login`, data).toPromise().then(res=> this.rlt = res);
    console.log(this.rlt.data);
    return this.rlt;
  }
  async tryRegister(data){
    await this.http.post(`${this.rootURL}/register`, data).toPromise().then(res => this.rlt = res);
    return this.rlt;
  }

}
