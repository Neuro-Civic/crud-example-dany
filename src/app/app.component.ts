import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/form/form.component';
import { User, UserService } from './services/user.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent, FormComponent, CommonModule],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'crud-angular';
  users: User[] = [];
  //variable que se comparte entre los componentes
  editing: boolean = false;
  currentUser: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) {
    this.loadUsers();
  }
  
  loadUsers() {
    this.users = this.userService.getUsers();
  }
  onUserSaved(user: User) {
    if (this.editing) {
      this.userService.updateUser(user);
    } else {
      this.userService.addUser(user);
    }
    this.editing = false;
    this.currentUser = { id: 0, name: '', email: '' };
    this.loadUsers();
  }

  onEditUser(user: User) {
    this.currentUser = { ...user };
    this.editing = true;
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id);
    this.loadUsers();
  }

  onCancelEdit() {
  this.editing = false;
  this.currentUser = { id: 0, name: '', email: '' };
}
}
