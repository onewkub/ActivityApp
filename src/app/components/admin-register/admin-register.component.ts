import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {PassMathcer} from '../register/validator/pass-mathcer.validator'

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  
  registerForm: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router : Router,
  ) {
    this.registerForm = formBuilder.group({
      email: ['oldnew123@example.com', [Validators.required, Validators.email]],
      // studentID: ['', [Validators.required, Validators.minLength(9)]],
      fname: ['Wachira', [Validators.required]], lname: ['Norasing', [Validators.required]],
      password: ['password', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['password', [Validators.required]]
    }, { validators: [PassMathcer] }
    );
  }

  ngOnInit() {
  }

  onRegister() {
    this.authService.adminRegister(this.registerForm.value).then(
      res => {
        // console.log(res)
        alert("Your registation is success.");
        this.router.navigate(['/']);

      },
      // error => {console.log(error)}
    ).catch(
      error => {
        // console.log(error);
        var errorList = error.error.errors;
        // console.log(errorList);
        // if(errorList.studentID){
        //   // console.log(errorList.studentID);
        //   this.registerForm.get('studentID').setErrors({sidUsed: true})
        // }
        if(errorList.email){
          console.log(errorList.email);
          this.registerForm.get('email').setErrors({emailUsed: true})

        }
      }
    );
  }
}
