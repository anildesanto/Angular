import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user-table/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
 @Input() profilePicUrl : string ;
 constructor(private userService : UserService, private router : Router){
   
}
   logOut()
   {
     this.userService.loggedInUser = null;
     this.router.navigate(["/login"]);
   }
  ngOnInit() {
  }

}
