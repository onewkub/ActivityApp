import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private cookieService: CookieService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  async ngOnInit() {  
    // await this.authService.loginWithToken(this.cookieService.get('token'));
    await this.userService.getActivityList(this.authService.currentUser.sid);
    await this.userService.getTotal(this.authService.currentUser.sid.toString().substr(0, 2))
    var redirectURL;
    let params = this.route.snapshot.queryParams;
    if (params['redirectURL']) {
      redirectURL = params['redirectURL'];
    }
    if (redirectURL) {
      this.router.navigateByUrl(redirectURL)
        .catch(() => this.router.navigate(['./']))
    } else {

      this.router.navigate(['./'])
    }
  }

}
