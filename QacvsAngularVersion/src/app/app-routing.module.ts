import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [

     
    {path : "login", component: LoginComponent},
    {path : "dashboard", component: DashboardComponent},
    {path : "create", component: CreateUserComponent},
    //  {path : "update", component: DashboardComponent},
    //  {path : "create", component: DashboardComponent},
   {path : "", redirectTo: "dashboard", pathMatch: "full"},
    // {path : "**", component: CvTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
