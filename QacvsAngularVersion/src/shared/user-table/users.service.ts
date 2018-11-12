import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./user";
import { tap } from "rxjs/operators";
import { Element } from "@angular/compiler/src/render3/r3_ast";
@Injectable
(
    {providedIn : "root"}
)
export class UserService
{
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
      getLoggedInUser() : IUser
      {
          return this.loggedInUser;
      }
    returnedImg : Object;
    constructor(private userRequest : HttpClient)
    {}
    baseUrl : string = "https://qacvmanager.azurewebsites.net/api/";
    generateImgUrl(userId : string) : string
    {
        return(`${this.baseUrl}user/${userId}/picture/download`);
    }
    findUsers(value : string, lastName) : Observable <IUser[]>
    {
        console.log("users:");
        return this.userRequest.get<IUser[]>(`${this.baseUrl}findbyname/${value}&${lastName}`);
    }
    defaultImage(imgId : string) : void
    {
        document.getElementById(imgId).setAttribute("src", "https://image.flaticon.com/icons/svg/149/149071.svg");
    }
}