import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.css']
})
export class ActivityTypeComponent implements OnInit {

  pageType: string = "";
  constructor(
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      // console.log(routeParams.type);
      this.pageType = routeParams.type;
    });

  }

}
