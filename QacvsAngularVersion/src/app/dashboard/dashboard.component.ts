import { Component, OnInit, OnChanges } from '@angular/core';
import { IUser } from 'src/shared/user-table/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageTitle : string = "Dashboard";
  userName : string;
  userToSearch : number;
  constructor() {
    console.log(this.loggedInUser);
  }
  loggedInUser : IUser = {
    "userId": 3,
    "firstName": "Dev",
    "lastName": "Gonsai",
    "email": "dev@qa.com",
    "password": "affd13e23173798456665b373a595dfd",
    "picture": {
      "binaryStream": {}
    },
    "prefLocation": "",
    "department": {
      "departmentId": 3,
      "role": "Trainee",
      "handler": {},
      "hibernateLazyInitializer": {}
    }
  }

  // get userToSearch() : number
  // {
  //   return this.toSearch;
  // }
  // set userToSearch(value: number)
  // {
  //   this.toSearch = value;
  // }

  ngOnInit() {
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
