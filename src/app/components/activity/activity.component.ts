import {Component, HostListener, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  cardCol = 4;

  constructor(
    public router: Router,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.cardCol = this.getCardCol();
    this.userService.getAllActivity();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cardCol = this.getCardCol();
  }

  getCardCol = (): number => Math.floor(window.innerWidth / 300);

  toProjectDetail() {
    console.log(this.userService.activityList);
    this.router.navigate(['/detail', 0]);
  }
}
