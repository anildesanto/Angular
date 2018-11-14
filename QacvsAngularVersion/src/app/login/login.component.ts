import { Component, OnInit } from '@angular/core';
import {MD5} from "crypto-js";
import { UserService } from '../shared/user-table/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  constructor(private userService : UserService) { }

  ngOnInit() {
  
  }
  tryLogIn()
  {
    const hashedPass = MD5(this.password);
    this.userService.tryLoggIn(this.email, hashedPass.toString());
    console.log("email: ", this.email);
    console.log("password: "+hashedPass);
  }
}
