import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'Ana Gómez', email: 'ana@example.com' }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    user.id = Date.now();
    this.users.push(user);
  }

  updateUser(updated: User) {
    const index = this.users.findIndex(u => u.id === updated.id);
    if (index > -1) {
      this.users[index] = updated;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
