import {Component, HostListener, OnInit, Input} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CreateActivityComponent} from '../create-activity/create-activity.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  cardCol = 4;
  @Input() searchText;
  constructor(

    public router: Router,
    public userService: UserService,

    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.cardCol = this.getCardCol();
    // this.userService.getAllActivity();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.cardCol = this.getCardCol();
  }
  openDialog(){
    console.log('Open Dialog');
    const dialogRef = this.dialog.open(CreateActivityComponent, {
      width: '45em'
    });
  }
  getCardCol = (): number => Math.floor(window.innerWidth / 300);

  toProjectDetail(id: string) {
    // console.log(id);
    this.router.navigate(['/detail', id]);
  }

  openNewActivityDialog(): void {
    this.dialog.open(CreateActivityComponent);
  }
}
