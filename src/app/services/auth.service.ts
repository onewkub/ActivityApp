import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = null;
  rootURL = environment.apiUrl;
  constructor(public http : HttpClient) { }
  
  async tryLogin(data : {email: string, password: string}){
    console.log(data);
    return this.http.post(`${this.rootURL}/login`, data).toPromise();
  }
  async tryRegister(data){
    return this.http.post(`${this.rootURL}/register`, data).toPromise();

  }
  async tryLogout(){
    if(this.currentUser){
      var token = {token : this.currentUser.token};
      console.log(token);
      return this.http.post(`${this.rootURL}/logout`, token).toPromise();
      // console.log(this.currentUser.token);
    }
    return null;
  }

  async getStudentID(uid){
    if(this.currentUser){
      return this.http.get(`${this.rootURL}/student/${uid}`).toPromise();
    }
  }

}
