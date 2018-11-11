import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CvsService } from './cvs.service';
import { ICv } from './cv';
import { catchError, tap, map } from 'rxjs/operators';``
@Component({
  selector: 'app-cv-table',
  templateUrl: './cv-table.component.html',
  styleUrls: ['./cv-table.component.css']
})
export class CvTableComponent implements OnInit {

  constructor(private cvsService : CvsService) { }
  cvsList : ICv[];
  filteredCvsList : ICv[];
  @Input() userId : number;
  @Input() toLoad : number;
  @Input() userName : string;
  tableTitle : string;
  ngOnChanges() : void
  {
    
    this.load();
  }
  ngOnInit() 
  {
    
    this.load();
   
  }
  load()
  {
    this.tableTitle = `${this.userName}'s Cvs Table`;
    this.currentStatus = "All";
    this.cvsService.getAllCvs().subscribe((list) => {
      this.cvsList = list.filter(cv => 
        cv.user.userId === this.userId
        );//show particular user cv
    this.filteredCvsList = this.cvsList;
    });
  }
  get userID() : number
  {
    return this.userId;
  }
  set userID (value : number)
  {
    
    this.userId = value;
    console.log("userId: "+this.userId);
  }
  currentStatus : string;
  get status () : string
  {
    return this.currentStatus;
  }
  set status (value : string)
  {
    this.currentStatus = value;
    this.filteredCvsList = this.filterByStatus(value);
  }
  filterByStatus(status:string) : ICv[]
  {
    console.log(status);
    
    return  this.cvsList.filter((cv) => cv.status.toLowerCase().startsWith(status.toLowerCase()));
  }
  ngDoCheck() {
    if (this.cvsService.reload  === true) 
    {
      this.load();
      //this.changeDetector.detectChanges();
      console.log("Reloaded: "+ this.cvsService.reload);
      this.cvsService.reload = false;
    }
  }
}
