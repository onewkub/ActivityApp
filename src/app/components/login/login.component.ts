import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;
  constructor(
    public formBuilder : FormBuilder,
  ) {
    this.loginForm = formBuilder.group(
      {
        email: [''],
        password: ['']
      });
   }

  ngOnInit() {
  }

  onLogin(): void{
    console.log(this.loginForm.value);
  }
}
