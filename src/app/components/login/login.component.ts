import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // handleError: any;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = formBuilder.group(
      {
        email: ['onewkub@example.com'],
        password: ['password']
      }
    )
  }

  ngOnInit() {
  }

  async onLogin() {
    await this.authService.tryLogin(this.loginForm.value)
      .then(
        async res => {
          var temp= res['data'];
          this.authService.currentUser = {
            name: temp.fname + ' ' + temp.lname,
            uid: temp.uid,
            sid: null,
            token: temp.token,
            isAdmin: temp.isAdmin
          };

          if(!this.authService.currentUser.isAdmin){
            var sid;
            await this.authService.getStudentID(this.authService.currentUser.uid).then(studentid => sid = studentid['data']);
            this.authService.currentUser.sid = sid.studentID;
            // console.log(sid);
          }
          console.log(this.authService.currentUser);
          this.router.navigate(['/main']);

        },
        error => {
          // this.handleError = error;
          // console.log(error);
          if (error) {
            alert("Your email is invalid");
            this.loginForm.reset();
          }
        }
      );
  }
}
