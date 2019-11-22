import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Activity} from '../../models/activity.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity: Activity;
  constructor(
    public userService: UserService,
    public activeRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.activity = this.userService.activityList.find(a => routeParams.id === a.actName);
    });
  }
}
