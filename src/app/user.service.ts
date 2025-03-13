import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This makes the service globally available via DI
})
export class UserService {
  constructor() { }

  // Example method to fetch users
  getUsers() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' }
    ];
  }
}
