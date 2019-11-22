import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {PassMathcer} from '../register/validator/pass-mathcer.validator';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) {
    this.registerForm = formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        fname: ['', [Validators.required]], lname: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password_confirmation: ['', [Validators.required]]
      }, {validators: [PassMathcer]}
    );
  }

  ngOnInit() {
  }

  onRegister() {
    this.authService.adminRegister(this.registerForm.value).then(
      res => {
        alert('Your registration is success.');
        this.router.navigate(['/auth']);
      },
    ).catch(
      error => {
        const errorList = error.error.errors;
        if (errorList.email) {
          console.log(errorList.email);
          this.registerForm.get('email').setErrors({emailUsed: true});
        }
      }
    );
  }
}
