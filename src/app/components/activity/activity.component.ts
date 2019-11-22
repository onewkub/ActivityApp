import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  cardCol = 4;
  constructor() { }

  ngOnInit() {
    this.cardCol = this.getCardCol();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cardCol = this.getCardCol();
  }

  getCardCol = (): number => Math.floor(window.innerWidth / 300);
}
