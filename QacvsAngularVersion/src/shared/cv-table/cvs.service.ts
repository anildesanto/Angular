import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { ICv } from './cv';
@Injectable
({
    providedIn : "root"
})
export class CvsService
{
    cvsUrl : string = "https://qacvmanager.azurewebsites.net/api/cv";
    constructor(private httpClient : HttpClient){}
    getAllCvs() : Observable<ICv[]>
    {
        return this.httpClient.get<ICv[]>(this.cvsUrl);
    }
}