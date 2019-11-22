import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;
  rootURL = environment.apiUrl;
  // params: any ;

  constructor(
    public http: HttpClient,
    private cookieService: CookieService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    // console.log(this.params['redirectURL']);
  }



  async loginWithEmail(data: { email: string, password: string }) {
    return await this.getUser(this.http.post(`${this.rootURL}/login`, data).toPromise());
  }
  async loginWithToken(token: string) {
    return await this.getUser(this.http.get(`${this.rootURL}/loginwithtoken/${token}`).toPromise());
  }
  async tryRegister(data) {
    return this.http.post(`${this.rootURL}/register`, data).toPromise();
  }
  async adminRegister(data) {
    return this.http.post(`${this.rootURL}/admin_register`, data).toPromise();
  }
  async tryLogout() {
    if (this.currentUser) {
      var token = { token: this.currentUser.token };
      return this.http.post(`${this.rootURL}/logout`, token).toPromise();
    }
    return null;
  }

  async getStudentID(uid) {
    if (this.currentUser) {
      return this.http.get(`${this.rootURL}/student/${uid}`).toPromise();
    }
  }

  async getUser(data) {
    var rlt: boolean;
    await data
      .then(
        async res => {
          var temp = res['data'];
          this.currentUser = {
            name: temp.fname + ' ' + temp.lname,
            uid: temp.uid,
            sid: null,
            token: temp.token,
            isAdmin: temp.isAdmin
          };

          var sid;
          await this.getStudentID(this.currentUser.uid)
            .then(studentid => sid = studentid['data']);
          this.currentUser.sid = sid.studentID;
          this.cookieService.set('token', this.currentUser.token);
          rlt = true;
          var redirectURL;
          let params = this.route.snapshot.queryParams;
          if (params['redirectURL']) {
            redirectURL = params['redirectURL'];
          }
          if (redirectURL) {
            this.router.navigateByUrl(redirectURL)
              .catch(() => this.router.navigate(['/']))
          } else {

            this.router.navigate(['/'])
          }

          // this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          rlt = false;
          // this.router.navigate(['./auth']);
        }
      );
    return rlt;
  }

}
