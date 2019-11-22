import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Activity} from '../models/activity.model';
import {Total} from '../models/total.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activityList: Activity[];
  faculty: Activity[];
  major: Activity[];
  other: Activity[];
  total: Total;
  rootURL = environment.apiUrl;

  constructor(
    public authService: AuthService,
    public http: HttpClient,
  ) {
    this.faculty = [];
    this.major = [];
    this.other = [];
  }

  public async getActivityList(studentID: number) {
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

  public async getTotal(year: string) {
    // console.log(year);
    await this.http.get(`${this.rootURL}/totalhour/${year}`).toPromise().then(
      res => {
        this.total = res['data'][0];
      }
    );
    // console.log(this.total);
  }

  getActivity(type?: string): Activity[] {
    // console.log('faculty', this.faculty);
    // console.log('actList', this.activityList);
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
    // console.log(type,rlt);
    return rlt;
  }
}
