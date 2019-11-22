import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  // isAdmin : boolean;
  constructor(
    public authService : AuthService,
    public router: Router,
    private cookieService: CookieService
  ) {
    // this.isAdmin = this.authService.currentUser.isAdmin;
    // console.log(this.authService.currentUser);
    // if(this.authService.currentUser.isAdmin){
    //   console.log('is Admin');
    // }
    // else{
    //   console.log('not is Admin');
    // }
   }

  ngOnInit() {
    // if(!this.authService.currentUser){
    //   this.router.navigate(['./auth']);
    // }
  }
  onLogout(){
    console.log("logout");
    this.authService.tryLogout()
    .then(res=>{
      console.log(res);
      this.cookieService.delete('token');
      this.router.navigate(['./auth']);
    });
  }
}
