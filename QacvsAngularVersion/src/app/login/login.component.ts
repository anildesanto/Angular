import { Component, OnInit } from '@angular/core';
import {MD5} from "crypto-js";
import { UserService } from '../shared/user-table/users.service';
import { Color } from '../color.enum';
import { GlobalVariables } from '../global-variables.enum';
//import {logo} from 'src/assets/Images/loading.gif';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  _password : string;
  _email : string;
  constructor(private userService : UserService) { }
  set email(value : string)
  {
    this.userService.updateElement(GlobalVariables.Email, Color.White);
    this._email = value;
  }
  get email()
  {
    return this._email;
  }
  set password(value : string)
  {
    this.userService.updateElement(GlobalVariables.Password, Color.White);
    this._password = value;
  }
  get password()
  {
    return this._password;
  }
  ngOnInit() {
  
  }

  tryLogIn()
  {
    if(!this.email)
    {
      this.userService.updateElement(GlobalVariables.Email, Color.LightPink);
    }
    else if(!this.password)
    {
      this.userService.updateElement(GlobalVariables.Password, Color.LightPink);
    }
    else
    {
      const hashedPass = MD5(this.password);
      this.userService.tryLoggIn(this.email, hashedPass.toString());
    }
  }
}
