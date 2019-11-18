import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PassMathcer } from "./validator/pass-mathcer.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      studentID : ['', [Validators.required]],
      fname: ['', [Validators.required]], lname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    }
    );
   }

  ngOnInit() {
  }

  onRegister(){
    this.authService.tryRegister(this.registerForm.value).then(
      res => {console.log(res)},
      error => {console.log(error)}
    )
  }
}
