import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from './user';
import { UserService } from './users.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  tableTitle : string = "User's Table";
  constructor(private userService : UserService) { }
  filter : string;
  userList : IUser[];
  filteredList : IUser[];
  info : string[] = [];
  @Input() loggedInUserDepartment : number;
  @Output() load : EventEmitter<string[]> = new EventEmitter<string[]>();
  set filterString(value : string)
  {
    const newValue = value.trim().split(" ");
    const first = newValue.shift();
    const second = newValue.join("");
    this.filter = value.trim();
    if(value.trim() === "")
    this.filteredList = this.userList;
    else
    this.userService.findUsers(first,second).subscribe(list =>  this.filteredList = list);
  }
  get filterString () : string
  {
    return this.filter;
  }
  ngOnInit() {
    if(this.loggedInUserDepartment !== 1 && this.loggedInUserDepartment !== 6)
    {
      this.userService.findUsers("","").subscribe(list =>
        {
          this.userList = list;
          this.filteredList = this.userList;
        }
        );
    }
  }
  loadCvs(userId : string, userName : string)
  {
    this.info.push(userId, userName);
    console.log("emmiting..."+this.info)
    this.load.emit(this.info);
    this.info.length = 0;
  }
  
}
