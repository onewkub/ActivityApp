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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component: HomepageComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin_register', component: AdminRegisterComponent },
    { path: 'login', pathMatch: 'full', redirectTo: '' }
  ]},
  { path: '', component: MainpageComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'status', component: ActivityStatusComponent },
    { path: 'activity/:type', component: ActivityTypeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
  ], canActivate: [AuthGuard]},
  // { path: 'manage', component: MainpageComponent, children: [
  //   // { path: 'manage', pathMatch: 'full', redirectTo: 'manage' }
  // ]},

  { path: '**', pathMatch: 'full', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
