import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.css']
})
export class ActivityTypeComponent implements OnInit {
  pageType: string = "";
  faculty: any[];
  major: any[];
  other: any[];
  constructor(
    public activeRoute: ActivatedRoute,
    public userService: UserService
  ) {
    // this.getActivity();
   }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      // console.log(routeParams.type);
      this.pageType = routeParams.type;
    });
    // console.log(this.userService.getActivityList)
  }
  getActivity(){
    this.faculty = this.userService.getActivity('faculty');
    this.major = this.userService.getActivity('major');
    this.other = this.userService.getActivity('other');
  }

}
