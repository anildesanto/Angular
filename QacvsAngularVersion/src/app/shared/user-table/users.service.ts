import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./user";
import { tap } from "rxjs/operators";
import { Element } from "@angular/compiler/src/render3/r3_ast";
import { Router } from "@angular/router";
@Injectable
(
    {providedIn : "root"}
)
export class UserService
{
    loggedInUser : IUser ;
      getLoggedInUser() : IUser
      {
          return this.loggedInUser;
      }
    returnedImg : Object;
    constructor(private userRequest : HttpClient, private router: Router)
    {}
    baseUrl : string = "https://qacvmanager.azurewebsites.net/api/";
    generateImgUrl(userId : string) : string
    {
        return(`${this.baseUrl}user/${userId}/picture/download`);
    }
    findUsers(value : string, lastName) : Observable <IUser[]>
    {
        return this.userRequest.get<IUser[]>(`${this.baseUrl}findbyname/${value}&${lastName}`);
    }
    defaultImage(imgId : string) : void
    {
        document.getElementById(imgId).setAttribute("src", "https://image.flaticon.com/icons/svg/149/149071.svg");
    }
    tryLoggIn(email : string, password : string)
    {
        this.userRequest.get<IUser>(`${this.baseUrl}login/${email}&${password}`)
        .subscribe((user) =>
        {
            if(user)
            {
                this.loggedInUser = user[0];
                console.log("user loggedin: "+user[0].firstName);
                console.log("try: "+this.loggedInUser.firstName);
                this.router.navigate(["/dashboard"]);
                return true;
            }
            else
            {
                return false;
            }
        });
    }
}