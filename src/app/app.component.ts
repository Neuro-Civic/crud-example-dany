import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './components/users/users.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent],
  template: `<app-users></app-users>`
})

export class AppComponent {
  title = 'crud-angular';
}
