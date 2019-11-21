import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ActivityApp';
  // private tokenValue: string;

  constructor(
    private cookieService: CookieService,
    public authService: AuthService
    ) { }

  public async ngOnInit(){
    // console.log(this.tokenValue);
    if(this.cookieService.get('token')){
      await this.authService.getUser(this.authService.loginWithToken(this.cookieService.get('token')));
    }
  }
}
