import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activity-setting',
  templateUrl: './activity-setting.component.html',
  styleUrls: ['./activity-setting.component.css']
})
export class ActivitySettingComponent implements OnInit {
  addTotalForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.addTotalForm = this.formBuilder.group({
      year: [''],
      faculty: [''],
      major: [''],
      other: ['']
    });
   }

  ngOnInit() {
  }

  async onSubmit(){
    // console.log(this.addTotalForm.value);
    if(await this.userService.getTotalHour(this.addTotalForm.value) === undefined){
      await this.userService.addTotalHour(this.addTotalForm.value);
    }
    else{
      await this.userService.editTotalHour(this.addTotalForm.value);
    }
    alert('your data has been saved.');
    this.addTotalForm.reset();
  }

  async onEdit(){

  }

}
