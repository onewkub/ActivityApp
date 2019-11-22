import { Component, OnInit } from '@angular/core';
import { Total } from 'src/app/models/total.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activity-status',
  templateUrl: './activity-status.component.html',
  styleUrls: ['./activity-status.component.css']
})
export class ActivityStatusComponent implements OnInit {
  public total: Total;
  constructor(
    public userService: UserService
  ) {
   }

  ngOnInit() {
    this.total = this.userService.total;// {year: 60,faculty: 30, major: 30, other: 30}
    console.log(this.total);
  }

}
