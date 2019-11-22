import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ActivityApp';

  constructor(
    private cookieService: CookieService,
    public router: Router,
    public authService: AuthService
    ) { 
      
    }

  public async ngOnInit(){
    if(this.cookieService.get('token'))
      await this.authService.loginWithToken(this.cookieService.get('token'));
    else
      this.router.navigate(['/auth'])
      // console.log(this.authService.currentUser);
  }
}
