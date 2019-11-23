import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  createActivityForm: FormGroup;
  isRequired = false;
  typeList = [{name:'Faculty', no: 1}, {name:'Major', no: 2}, {name:'Other', no: 3}];

  constructor(
    public dialogRef: MatDialogRef<CreateActivityComponent>,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { 
    this.createActivityForm = this.formBuilder.group({
      actID: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern('[0-9]*')]],
      actName: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      actDate: ['', [Validators.required]],
      isRequired: [false],
      hour: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      type: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close();
  }
  async onSubmit(){
    // console.log(this.createActivityForm.value);
    var temp = this.createActivityForm.value;
    var data = {
      actYear : (temp.actDate.getFullYear()+543)%100,
      actID: temp.type.no + temp.actID,
      actName: temp.actName,
      detail: temp.detail,
      actDate: temp.actDate.getFullYear() + '-' + (temp.actDate.getMonth()+1) + '-' + temp.actDate.getDate(),
      isRequired: temp.isRequired,
      hour: temp.hour,
      type: temp.type.name
    }
    console.log(data);
    await this.userService.createActivity(data);
    this.router.navigate(['loading'])
  }
}
