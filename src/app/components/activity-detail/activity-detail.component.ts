
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Activity} from '../../models/activity.model';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  actID: string;
  year: string
  id :string;
  activity: Activity;
  joinLink: string;
  qrGen: string
  constructor(
    public userService: UserService,
    public activeRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      // console.log(routeParams.id.substr(0,2), routeParams.id.slice(2));
      this.year = routeParams.id.substr(0,2);
      this.id = routeParams.id.slice(2);
    });
    this.activity = this.userService.activityList.find(a => a.actYear.toString() === this.year && a.actID.toString() === this.id);
    this.actID = this.year+this.id;
    this.joinLink = `${environment.webUrl}/join/${this.actID}`;
    this.qrGen = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${this.joinLink}`;
    console.log(this.joinLink);
  }
  getQrCode(){

  }
}
