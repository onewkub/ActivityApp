import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activityName: string;
  constructor(
    public activeRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.activityName = routeParams.id;
    });
  }
}
