import { Component, OnInit } from '@angular/core';
import { Total } from 'src/app/models/total.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activity-status',
  templateUrl: './activity-status.component.html',
  styleUrls: ['./activity-status.component.css']
})
export class ActivityStatusComponent implements OnInit {
  constructor(
    public userService: UserService
  ) {
   }

  ngOnInit() {

  }

}
