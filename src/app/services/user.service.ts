import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Activity} from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activityList: Activity[];
  faculty: Activity[];
  major: Activity[];
  other: Activity[];
  rootURL = environment.apiUrl;

  constructor(
    public authService: AuthService,
    public http: HttpClient,
  ) {
    this.faculty = [];
    this.major = [];
    this.other = [];
  }

  public async getActivityList(studentID: string) {
    await this.http.get(`${this.rootURL}/getstudentactivity/${studentID}`).toPromise().then(
      res => {
        this.activityList = res['data'];
      }
    );
    this.activityList.forEach(element => {
      // console.log(element);
      if (element.type === 'Faculty') {
        this.faculty.push(element);
      } else if (element.type === 'Major') {
        this.major.push(element);
      } else {
        this.other.push(element);
      }
    });
    // console.log(this.activityList);

    // console.log(this.faculty, this.major, this.other);
  }

  getActivity(type?: string): Activity[] {
    // console.log('faculty', this.faculty);
    let rlt: Activity[];
    if (type === 'faculty') {
      rlt = this.faculty;
    } else if (type === 'major') {
      rlt = this.major;
    } else if (type === 'other') {
      rlt = this.other;
    } else {
      return rlt = this.activityList;
    }
    // console.log(rlt);
    return rlt;
  }
}
