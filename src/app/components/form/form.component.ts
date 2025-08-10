import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  @Input() currentUserForm!: User;
  @Input() editingUser: boolean = false;

  @Output() currentUserEdited = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  localUser: User = { id: 0, name: '', email: '' };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentUserForm']?.currentValue) {
      this.localUser = { ...this.currentUserForm };
    }
  }

  sendEditedUser() {
    if (!this.editingUser) {
      this.localUser.id = Date.now();
    }

    this.currentUserEdited.emit(this.localUser);

    this.localUser = { id: 0, name: '', email: '' };
  }

  cancelEdit() {
    this.localUser = { id: 0, name: '', email: '' };
      this.cancel.emit();
  }
}
