import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: User;
  @Output() removeUser: EventEmitter<User> = new EventEmitter();

  onUserRemove(user: User): void {
    this.removeUser.emit(user);
  }

}
