import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public userService: UserService
  ) {
    this.loginForm = formBuilder.group(
      {
        email: [''],
        password: ['']
      }
    )
  }

  ngOnInit() {
  }

  async onLogin() {
    if(!await this.authService.loginWithEmail(this.loginForm.value)){
      alert('your email or password is not correct');
      this.loginForm.reset();
    }
    await this.userService.getActivityList(this.authService.currentUser.sid);


  }
}
