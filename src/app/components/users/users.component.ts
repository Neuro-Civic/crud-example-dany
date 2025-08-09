import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: User[] = [];
  editing = false;
  currentUser: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }

  saveUser() {
    if (this.editing) {
      this.userService.updateUser(this.currentUser);
    } else {
      this.userService.addUser(this.currentUser);
    }
    this.currentUser = { id: 0, name: '', email: '' };
    this.editing = false;
    this.loadUsers();
  }

  editUser(user: User) {
    this.currentUser = { ...user };
    this.editing = true;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.loadUsers();
  }
}

