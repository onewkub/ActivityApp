import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  createActivityForm: FormGroup;
  isRequired = false;
  typeList = ['Faculty', 'Major', 'Other'];
  constructor(
    public dialogRef: MatDialogRef<CreateActivityComponent>,
    public formBuilder: FormBuilder,
    public userService: UserService,
  ) { 
    this.createActivityForm = this.formBuilder.group({
      actID: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern('[0-9]*')]],
      actName: ['', [Validators.required]],
      detail: [''],
      actDate: ['', [Validators.required]],
      isRequired: [''],
      hour: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      type: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close();
  }
  onSubmit(){
    console.log(this.createActivityForm.value);
  }
}
