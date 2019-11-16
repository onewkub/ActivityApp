import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
    document.body.style.background = 'rgb(140, 140, 140)';
   }

  ngOnInit() {
  }

}
