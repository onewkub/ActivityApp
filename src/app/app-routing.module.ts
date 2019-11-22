import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { AdminRegisterComponent } from "./components/admin-register/admin-register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ActivityStatusComponent } from "./components/activity-status/activity-status.component";
import { ActivityTypeComponent } from "./components/activity-type/activity-type.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { JoinActivityComponent } from "./components/join-activity/join-activity.component";
import { AuthGuard } from './guards/auth.guard';
import {ActivityDetailComponent} from './components/activity-detail/activity-detail.component';

const routes: Routes = [
  { path: 'auth', component: HomepageComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin_register', component: AdminRegisterComponent },
    { path: 'login', pathMatch: 'full', redirectTo: '' }
  ]},
  { path: '', component: MainpageComponent, children: [
    { path: 'detail/:id', component: ActivityDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'status', component: ActivityStatusComponent },
    { path: 'activity/:type', component: ActivityTypeComponent },
    { path: 'join/:actid', component: JoinActivityComponent },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
  ], canActivate: [AuthGuard]},
  { path: 'loading', component: LoadingComponent },

  { path: 'admin', component: MainpageComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ], canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'loading' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
