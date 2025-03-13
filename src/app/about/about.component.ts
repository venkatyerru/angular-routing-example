import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  // Import the service

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userCount: number = 0;

  constructor(private userService: UserService) { }  // Inject the service

  ngOnInit(): void {
    this.userCount = this.userService.getUsers().length;  // Get user count from the service
  }
}
