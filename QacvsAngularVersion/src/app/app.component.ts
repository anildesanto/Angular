import { Component } from '@angular/core';
import { UserService } from 'src/shared/user-table/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService : UserService){}
  title = 'Qacvs Angular Version';
}