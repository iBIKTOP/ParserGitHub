import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'someProject';
  arrUsers: any[];
  name: string;
  constructor(private usersService: UsersService) {}
  showUsers() {
    this.usersService.getUsers().subscribe((data: any[]) => (this.arrUsers = data));
  }
  ngOnInit() {
    this.showUsers();
  }
}
