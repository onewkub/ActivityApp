import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-status',
  templateUrl: './activity-status.component.html',
  styleUrls: ['./activity-status.component.css']
})
export class ActivityStatusComponent implements OnInit {
  constructor(
    public userService: UserService,
    public router: Router
  ) {
   }

  ngOnInit() {
  }

}
