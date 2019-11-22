import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {UserService} from 'src/app/services/user.service';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';

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
  ) {
  }

  async ngOnInit() {
    // await this.authService.loginWithToken(this.cookieService.get('token'));
    if (!this.authService.currentUser.isAdmin) {
      await this.userService.getActivityList(this.authService.currentUser.sid);
      await this.userService.getTotal(this.authService.currentUser.sid.toString().substr(0, 2));
    }
    else{
      await this.userService.getAllACtivity();
    }

    let redirectURL;
    const params = this.route.snapshot.queryParams;
    if (params.redirectURL) {
      redirectURL = params.redirectURL;
    }
    // console.log(redirectURL);
    if (redirectURL) {
      // if(this.authService.currentUser.isAdmin)this.router.navigateByUrl(redirectURL).catch(() => this.router.navigate(['/admin']));
      this.router.navigateByUrl(redirectURL).catch(() => this.router.navigate(['./']));
    } else {
      // if(this.authService.currentUser.isAdmin)this.router.navigate(['/admin']);
      this.router.navigate(['./'])
    }
  }

}
