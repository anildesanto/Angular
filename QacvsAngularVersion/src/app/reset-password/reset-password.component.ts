import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-table/users.service';
import { GlobalVariables } from '../global-variables.enum';
import { Color } from '../color.enum';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService : UserService) { }
  _email : string;
  set email(value : string)
  {
    this.userService.updateElement(GlobalVariables.Email, Color.White);
    this._email = value;
  }
  get email()
  {
    return this._email;
  }
  ngOnInit() {
  }
  tryReset()
  {
    if(!this.email)
    {
      this.userService.updateElement(GlobalVariables.Email, Color.LightPink);
    }
    else
    {
      console.log("email: ", this.email)
    }
  }
}
