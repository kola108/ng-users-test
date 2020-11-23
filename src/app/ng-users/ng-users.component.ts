import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { UsersState } from '../reducers/users/users.reducer';
import { selectUsers, selectUsersAreLoaded } from '../reducers/users/users.selectores';
import { UsersDeleteAction, UsersFetchAction } from '../reducers/users/users.actions';

@Component({
  selector: 'app-ng-users',
  templateUrl: './ng-users.component.html',
  styleUrls: ['./ng-users.component.css']
})
export class NgUsersComponent implements OnInit {
  users$: Observable<User[]> = this.store.pipe(select(selectUsers))
  usersAreLoaded$: Observable<boolean> = this.store.pipe(select(selectUsersAreLoaded))

  constructor(private store: Store<UsersState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new UsersFetchAction())
  }

  removeUser(user: User): void {
   this.store.dispatch(new UsersDeleteAction({userId: user.id}))
  }
}
