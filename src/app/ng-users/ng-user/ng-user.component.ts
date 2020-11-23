import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user.interface';

@Component({
  selector: 'app-ng-user',
  templateUrl: './ng-user.component.html',
  styleUrls: ['./ng-user.component.css']
})
export class NgUserComponent implements OnInit {

  @Input() user: User;
  @Output() removeUser: EventEmitter<User> = new EventEmitter();

  onUserRemove(user: User): void {
    this.removeUser.emit(user);
  }

  ngOnInit() {
  }

}
