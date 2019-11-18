import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";

const routes: Routes = [
  { path: '', component: HomepageComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]},
  { path: 'main', component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
