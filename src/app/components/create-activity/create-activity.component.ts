import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  addActivityForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateActivityComponent>,
    public formBuilder: FormBuilder,
    public userService: UserService,
  ) { }

  ngOnInit() {
  }

}
