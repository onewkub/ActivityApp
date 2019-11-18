import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(
    public formBuilder : FormBuilder
  ) { 
    this.registerForm = formBuilder.group(
      {
        email : [''],
        studentID : [''],
        fname : [''], lname :[''],
        password : [''],
        password_confirmation : ['']
      }
    );
  }

  ngOnInit() {
  }

  onRegister(){
    console.log(this.registerForm.value);
  }
}
