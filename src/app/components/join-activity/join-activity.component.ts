import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-join-activity',
  templateUrl: './join-activity.component.html',
  styleUrls: ['./join-activity.component.css']
})
export class JoinActivityComponent implements OnInit {

  activityID: string;
  constructor(
    public activeRoute: ActivatedRoute,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.activityID = routeParams.actid;
    });
    // console.log(this.activityID);
    this.joinActivity(this.activityID);
  }
  async joinActivity(actID){
    await this.userService.joinActivity(actID);
    this.router.navigate(['loading']);

  }
}
