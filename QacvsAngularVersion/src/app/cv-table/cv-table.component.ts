import { Component, OnInit } from '@angular/core';
import { CvsService } from './cvs.service';
import { catchError, tap, map } from 'rxjs/operators';``
@Component({
  selector: 'app-cv-table',
  templateUrl: './cv-table.component.html',
  styleUrls: ['./cv-table.component.css']
})
export class CvTableComponent implements OnInit {
  tableTitle : string = "Cvs Table"
  constructor(private cvsService : CvsService) { }
  cvsList : any[];
  filteredCvsList : any[];
  ngOnInit() 
  {
    this.cvsService.getAllCvs().subscribe((list) => {
      this.cvsList = list;
      this.filteredCvsList = this.cvsList;
    });
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
  filterByStatus(status:string) : any[]
  {
    console.log(status);
    
    return  this.cvsList.filter((cv) => cv.status.toLowerCase().startsWith(status.toLowerCase()));
  }
}
