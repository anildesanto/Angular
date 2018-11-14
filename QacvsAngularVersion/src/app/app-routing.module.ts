import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginCheckGuard } from './login-check.guard';

const routes: Routes = [

     
    {path : "login",
    component: LoginComponent,
    canActivate : [LoginCheckGuard]
    },
    
    {path : "dashboard", 
    component: DashboardComponent,
    canActivate : [LoginCheckGuard]
    },
    {path : "create",
    canActivate : [LoginCheckGuard],
    component: CreateUserComponent},
    //  {path : "update", component: DashboardComponent},
    //  {path : "create", component: DashboardComponent},
   {path : "", redirectTo: "login", canActivate : [LoginCheckGuard], pathMatch: "full"},
    // {path : "**", component: CvTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
