import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { ICv } from './cv';
import { GlobalVariables } from "src/app/global-variables.enum";
import { UserService } from "../user-table/users.service";
@Injectable
({
    providedIn : "root"
})
export class CvsService
{
    fileLoc : HTMLInputElement; 
    baseUrl : string = GlobalVariables.Api;
    reload :  boolean = false;
    constructor(private httpClient : HttpClient, private userService : UserService){}
    getAllCvs() : Observable<ICv[]>
    {
        return this.httpClient.get<ICv[]>(`${this.baseUrl}/cv`);
    }
    deleteCv(cvId : string) : void
    {
        console.log("deleting");
        this.httpClient.get(`${this.baseUrl}/cv/${cvId}/delete`).toPromise()
        .then(() => {console.log("deleted!"); this.reload = true;});
    }
    upload(isCv : boolean)
    {
       this.fileLoc = document.getElementById("file") as HTMLInputElement;
       var formData = new FormData();

       console.log("File : "+ this.fileLoc.files[0]);
       formData.append("file", this.fileLoc.files[0]);
    //    https://cors-anywhere.herokuapp.com/
        if(isCv)
        {
            this.httpClient.post<ICv>(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/user/${this.userService.loggedInUser.userId}/upload/${this.fileLoc.files[0].name}`,formData)
            .subscribe((cv) =>
            {
                if(cv)
                {
                    console.log("ID: "+cv.cvId);
                    console.log("uploaded!");
                    this.fileLoc.value = null;
                    this.reload = true;
                }
            },
            error => 
            {
                console.log("Not uploaded!");
            });
        }  
        // .toPromise()
        // .then(() => {console.log("deleted!"); this.reload = true;});
    }
}