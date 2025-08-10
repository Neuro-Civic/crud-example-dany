import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html'
})


export class UsersComponent {
  @Input() users: User[] = [];
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<number>();

  onEdit(user: User) {
    this.edit.emit(user);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}

