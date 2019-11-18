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
  currentUser: any;
  handleError: any;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService
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
    await this.authService.tryLogin(this.loginForm.value)
    .then(
      res => {
        this.currentUser = res['data'];
        console.log(this.currentUser);

      },
      error =>{
        this.handleError = error;
        console.log(this.handleError);
      }
    );
  }
}
