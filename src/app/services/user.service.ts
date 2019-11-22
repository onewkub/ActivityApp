import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

export interface Activity{
  actYear: number;
  actID: number;
  type: string;
  actName: string;
  detail: string;
  hour: number;
  actDate: Date;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  activityList: Activity[];
  faculty: Activity[] = [];
  major: Activity[] = [];
  other: Activity[] = [];
  rootURL = environment.apiUrl;
  constructor(
    public authService : AuthService,
    public http: HttpClient,
  ) { }

  public async getActivityList(studentID: string){
    await this.http.get(`${this.rootURL}/getstudentactivity/${studentID}`).toPromise().then(
      res =>{
        this.activityList = res['data'];
      }
    );
    // console.log(this.activityList);
    this.activityList.forEach(element =>{
      if(element.type === 'faculty')this.faculty.push(element);
      else if (element.type === 'major')this.major.push(element);
      else this.other.push(element);
      // console.log(element);
    })
    console.log(this.faculty, this.major, this.other);
  }
}
