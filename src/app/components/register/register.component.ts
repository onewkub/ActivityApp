import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
      email : [''],
      studentID : [''],
      fname: [''], lname: [''],
      password: [''],
      password_confirmation: ['']

    });
   }

  ngOnInit() {
  }

  onRegister(){
    console.log(this.registerForm.value);
  }
}
