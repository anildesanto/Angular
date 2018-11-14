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
    reload :  boolean = false;
    constructor(private httpClient : HttpClient){}
    getAllCvs() : Observable<ICv[]>
    {
        return this.httpClient.get<ICv[]>(this.cvsUrl);
    }
    deleteCv(cvId : string) : void
    {
        console.log("deleting");
        this.httpClient.get(`${this.cvsUrl}/${cvId}/delete`).toPromise()
        .then(() => {console.log("deleted!"); this.reload = true;});
    }
}