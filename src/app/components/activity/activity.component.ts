import {Component, HostListener, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivityService } from 'src/app/services/activity.service';
import { MatDialog } from "@angular/material";
import { CreateActivityComponent } from "../create-activity/create-activity.component";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  cardCol = 4;

  constructor(
    public userService: UserService,
    public activityService: ActivityService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.cardCol = this.getCardCol();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cardCol = this.getCardCol();
  }
  openDialog(){
    console.log('Open Dialog');
    const dialogRef = this.dialog.open(CreateActivityComponent, {
      width: '45em'
    });
  }
  getCardCol = (): number => Math.floor(window.innerWidth / 300);
}
