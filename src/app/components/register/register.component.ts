import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PassMathcer } from "./validator/pass-mathcer.validator";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router : Router,
  ) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      studentID: ['', [Validators.required, Validators.minLength(9)]],
      fname: ['', [Validators.required]], lname: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: [PassMathcer] }
    );
  }

  ngOnInit() {
  }

  onRegister() {
    this.authService.tryRegister(this.registerForm.value).then(
      res => {
        // console.log(res)
        alert("Your registation is Succes");
        this.router.navigate(['/']);

      },
      // error => {console.log(error)}
    ).catch(
      error => {
        // console.log(error);
        var errorList = error.error.errors;
        // console.log(errorList);
        if(errorList.studentID){
          // console.log(errorList.studentID);
          this.registerForm.get('studentID').setErrors({sidUsed: true})
        }
        if(errorList.email){
          console.log(errorList.email);
          this.registerForm.get('email').setErrors({emailUsed: true})

        }
      }
    );
  }
}
