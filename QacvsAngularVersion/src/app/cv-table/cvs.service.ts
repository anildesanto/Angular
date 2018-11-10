import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Injectable
({
    providedIn : "root"
})
export class CvsService
{
    cvsUrl : string = "https://qacvmanager.azurewebsites.net/api/cv";
    constructor(private httpClient : HttpClient){}
    getAllCvs() : Observable<any[]>
    {
        return this.httpClient.get<any[]>(this.cvsUrl);
    }
}