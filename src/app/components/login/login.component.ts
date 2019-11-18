import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public formBuilder : FormBuilder,
    public authService : AuthService
    ) {
      this.loginForm = formBuilder.group(
        {
          email :[''],
          password : ['']
        }
      )
     }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.loginForm.value);
    this.authService.tryLogin(this.loginForm);
  }
}
