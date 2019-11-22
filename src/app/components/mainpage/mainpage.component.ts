import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(
    public authService : AuthService,
    public router: Router,
    private cookieService: CookieService,
    public userService: UserService
  ) {
    
   }

  ngOnInit() {
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
