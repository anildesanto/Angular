import { Component, OnInit } from '@angular/core';
import { CvsService } from '../cv-table/cvs.service';
import { UserService } from '../user-table/users.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
fileTypes : string = "application/pdf,.doc,.docx";
  constructor(private cvsService : CvsService, private userService : UserService) { }

  ngOnInit() {
  }

}
