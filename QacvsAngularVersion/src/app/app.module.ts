import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvTableComponent } from './shared/cv-table/cv-table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './shared/user-table/user-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UploadComponent } from './shared/upload/upload.component';
@NgModule({
  declarations: [
    AppComponent,
    CvTableComponent,
    UserTableComponent,
    DashboardComponent,
    SideBarComponent,
    LoginComponent,
    CreateUserComponent,
    ResetPasswordComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
