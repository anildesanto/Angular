import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./user";
import { Router } from "@angular/router";
import { GlobalVariables } from "src/app/global-variables.enum";
import { Color } from "src/app/color.enum";
@Injectable
(
    {providedIn : "root"}
)
export class UserService
{
    checking : boolean;
    loggedInUser : IUser ;
      getLoggedInUser() : IUser
      {
          return this.loggedInUser;
      }
    returnedImg : Object;
    constructor(private userRequest : HttpClient, private router: Router)
    {}
    baseUrl : string = GlobalVariables.Api;
    generateImgUrl(userId : string) : string
    {
        return(`${this.baseUrl}/user/${userId}/picture/download`);
    }
    findUsers(value : string, lastName) : Observable <IUser[]>
    {
        return this.userRequest.get<IUser[]>(`${this.baseUrl}/findbyname/${value}&${lastName}`);
    }
    defaultImage(imgId : string) : void
    {
        document.getElementById(imgId).setAttribute("src", "https://image.flaticon.com/icons/svg/149/149071.svg");
    }
    tryLoggIn(email : string, password : string) : void
    {
        this.checking = true;
        //this.updateElement(GlobalVariables.Confirm, Color.LimeGreen);
        this.userRequest.get<IUser>(`${this.baseUrl}/login/${email}&${password}`)
        .subscribe((user) =>
        {
            if(user)
            {
                this.loggedInUser = user[0];
                console.log("user loggedin: "+user[0].firstName);
                console.log("try: "+this.loggedInUser.firstName);
                this.router.navigate(["/dashboard"]);
                //this.updateElement(GlobalVariables.Confirm, Color.LimeGreen);
                this.checking = false;
            }
        },
        error => 
        {
            this.updateElement(GlobalVariables.Email, Color.LightPink);
            this.checking = false;
            document.getElementById('myModal').style.display = "block";
        });
    }
    updateElement(elementId : string, colour : string)
    {
      const element =  document.getElementById(elementId);
      element.setAttribute("style", "background-color : "+colour);
      element.focus();
    }
}