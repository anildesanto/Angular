import { Component, OnInit, OnChanges } from '@angular/core';
import { IUser } from 'src/shared/user-table/user';
import { UserService } from 'src/shared/user-table/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageTitle : string = "Dashboard";
  userName : string;
  userToSearch : number;
  constructor(private userService : UserService){
   
  }
  loggedInUser : IUser;

  // get userToSearch() : number
  // {
  //   return this.toSearch;
  // }
  // set userToSearch(value: number)
  // {
  //   this.toSearch = value;
  // }

  ngOnInit() {
    this.loggedInUser = this.userService.getLoggedInUser();
    console.log("loggedin user:"+this.loggedInUser);
    if(this.loggedInUser.department.departmentId !== 1 && this.loggedInUser.department.departmentId !== 1)
    {
      this.userName = "User";
    }
    else
    {
      this.userName = this.loggedInUser.firstName;
      this.userToSearch = this.loggedInUser.userId;
    }

  }
  ngOnChanges()
  {
    //this.userToSearch++;
    //this.userName = info[0];
  }
  updateCvTable(info : string[])
  {
    console.log("received: "+info);
    const lol = info[0];
    this.userToSearch = Number(lol);
    this.userName = info[1];
    console.log("nr: "+this.userToSearch);
    //console.log("nr: "+this.toSearch);
    console.log("name: "+ this.userName)
  }
}
