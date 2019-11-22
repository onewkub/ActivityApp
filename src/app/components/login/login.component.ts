import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // handleError: any;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) {
    this.loginForm = formBuilder.group(
      {
        email: [''],
        password: ['']
      }
    );
  }

  ngOnInit() {
  }

  async onLogin() {
    await this.authService.loginWithEmail(this.loginForm.value);
    if (!this.authService.currentUser) {
      this.loginForm.reset();
    }
    // if(this.authService.currentUser){
    //   if(this.authService.currentUser.isAdmin) this.router.navigate(['manage']);
    //   else this.router.navigate(['main']);
    // }
    // else{
    //   this.router.navigate(['/']);
    // }
  }
}
