import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/user-table/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate {
  constructor(private userService : UserService, private router : Router){
   
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if(!this.userService.loggedInUser && state.url !== "/login")
      {
        this.router.navigate(["/login"]);
        return false;
      }
      else if(this.userService.loggedInUser && state.url === "/login")
      {
        this.router.navigate(["/dashboard"]);
        return false;
      }
      console.log("path: "+state.url);
      //this.router.navigate([state.url]);
      return true;
  }
 
}

