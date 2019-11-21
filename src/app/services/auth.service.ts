import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;
  rootURL = environment.apiUrl;
  constructor(
    public http: HttpClient,
    private cookieService : CookieService
    ) { }

  

  async loginWithEmail(data: { email: string, password: string }) {
    // console.log(data);
    return this.http.post(`${this.rootURL}/login`, data).toPromise();
  }
  async loginWithToken(token: string){
    return this.http.get(`${this.rootURL}/loginwithtoken/${token}`).toPromise();
  }
  async tryRegister(data) {
    return this.http.post(`${this.rootURL}/register`, data).toPromise();
  }
  async adminRegister(data) {
    // console.log(data);
    return this.http.post(`${this.rootURL}/admin_register`, data).toPromise();
  }
  async tryLogout() {
    if (this.currentUser) {
      var token = { token: this.currentUser.token };
      // console.log(token);
      return this.http.post(`${this.rootURL}/logout`, token).toPromise();
      // console.log(this.currentUser.token);
    }
    return null;
  }

  async getStudentID(uid) {
    if (this.currentUser) {
      return this.http.get(`${this.rootURL}/student/${uid}`).toPromise();
    }
  }

  async getUser(data){
    await data
      .then(
        async res => {
          var temp= res['data'];
          this.currentUser = {
            name: temp.fname + ' ' + temp.lname,
            uid: temp.uid,
            sid: null,
            token: temp.token,
            isAdmin: temp.isAdmin
          };

          if(!this.currentUser.isAdmin){
            var sid;
            await this.getStudentID(this.currentUser.uid)
            .then(studentid => sid = studentid['data']);
            this.currentUser.sid = sid.studentID;
            // console.log(sid);
            // this.router.navigate(['/main']);
            this.cookieService.set('token', this.currentUser.token);
          }
          // console.log(this.authService.currentUser);
          else{
            // this.router.navigate(['/manage']);
          }
        },
        error => {
          // this.handleError = error;
          // console.log(error);
          if (error) {
            // alert("Your email is invalid");
            // this.loginForm.reset();
            console.log(error);
          }
        }
      );
      // return this.currentUser;
  }

}
