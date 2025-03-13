import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  // Import the service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }  // Inject the service

  ngOnInit(): void {
    this.users = this.userService.getUsers();  // Use the service to get users
  }
}
