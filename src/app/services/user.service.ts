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
  userHour: {faculty: number, major: number, other: number};
  rootURL = environment.apiUrl;

  constructor(
    public authService: AuthService,
    public http: HttpClient,
  ) {
    this.initdata();
  }

  public async getActivityList(studentID: number){
    this.initdata();
    // console.log('get it');
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
  public async getAllActivity(){
    this.initdata();
    await this.http.get(`${this.rootURL}/activity`).toPromise().then(
      res => {
        this.activityList = res['data'];
      }
    );
    // console.log(this.activityList);
  }

  public async getTotal(year: string) {
    // console.log(year);
    await this.http.get(`${this.rootURL}/totalhour/${year}`).toPromise().then(
      res => {
        this.total = res['data'][0];
      }
    )

    this.getActivity('faculty').forEach(element =>{this.userHour.faculty+= element.hour})
    this.getActivity('major').forEach(element =>{this.userHour.major+= element.hour})
    this.getActivity('other').forEach(element =>{this.userHour.other+= element.hour})

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
  async joinActivity(aid: string){
    var data = {stdID: this.authService.currentUser.sid};
    await this.http.post(`${this.rootURL}/join_activity/${aid}`, data).toPromise().then(
      res=>{alert('your data has been saved')},
      error =>{alert('you had already or it does not have this activity')}
    );
  }
  initdata():void{
    this.faculty = [];
    this.major = [];
    this.other = [];
    this.activityList = [];
    this.userHour = {
      faculty: 0,
      major: 0,
      other: 0
    }
  }
  public getDate(date: Date): string {
    date = new Date(date);
    // console.log(date.getDate());
    const months = ['Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'];
    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    // return 'test';
  }
  public async createActivity(data){
    var rlt;
    await this.http.post(`${this.rootURL}/activity`, data).toPromise().then(
      res =>{rlt = res},
      error => {console.log(error);}
    );
    return rlt;
  }
}
