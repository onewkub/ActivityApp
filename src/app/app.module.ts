import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from "@angular/material";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CookieService } from 'ngx-cookie-service';
import { ActivityStatusComponent } from './components/activity-status/activity-status.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTypeComponent } from './components/activity-type/activity-type.component';
import { LoadingComponent } from './components/loading/loading.component';
import { JoinActivityComponent } from './components/join-activity/join-activity.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ActivitySettingComponent } from './components/activity-setting/activity-setting.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    AdminRegisterComponent,
    DashboardComponent,
    ActivityStatusComponent,
    ActivityComponent,
    ActivityTypeComponent,
    LoadingComponent,
    JoinActivityComponent,
    CreateActivityComponent,
    ActivitySettingComponent,
    ActivityDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    Ng2SearchPipeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateActivityComponent,
  ]
})
export class AppModule { }
