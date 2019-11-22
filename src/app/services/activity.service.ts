import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Activity} from '../models/activity.model';

export interface ActivityData {
  actYear: number;
  actID: number;
  type: string;
  actName: string;
  detail: string;
  hour: number;
  actDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  rootURL = environment.apiUrl;
  constructor(public http: HttpClient) { }

  public async createActivity(activity: Activity) {
    const act: ActivityData = {
      actDate: this.convertToSQLDate(activity.actDate),
      actYear: activity.actYear,
      actName: activity.actName,
      actID: new Date().getTime(), // Unique ID, This should be handled by back-end.
      hour: activity.hour,
      type: activity.type,
      detail: activity.detail
    };
    return  this.http.post(`${this.rootURL}/activity`, act).toPromise();
  }

  convertToSQLDate = (date: Date): string => date.toISOString().slice(0, 19).replace('T', ' ');
}
