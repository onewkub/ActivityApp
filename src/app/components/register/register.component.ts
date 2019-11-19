import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PassMathcer } from "./validator/pass-mathcer.validator";
import { validateHorizontalPosition } from '@angular/cdk/overlay';

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
      studentID : ['', [Validators.required, Validators.minLength(9)]],
      fname: ['', [Validators.required]], lname: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    }, {validators: [PassMathcer]}
    );
   }

  ngOnInit() {
  }

  onRegister(){
    this.authService.tryRegister(this.registerForm.value).then(
      res => {console.log(res)},
      // error => {console.log(error)}
    ).catch(
      error => console.log(error)
    )
  }
}
