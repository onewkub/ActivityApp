import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute
  ) {
    // document.body.style.background = 'rgb(140, 140, 140)';
   }

  ngOnInit() {
    // let params = this.route.snapshot.queryParams;
    // console.log(params['redirectURL']);
  }

}
