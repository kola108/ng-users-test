import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersActions, usersActionsType, UsersSetAction } from '../reducers/users/users.actions';
import { map, switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private appService: AppService) {
  }

  @Effect() getUsers$ = this.actions$
    .pipe(
      ofType<UsersActions>(usersActionsType.fetch),
      switchMap(
        () => this.appService.getUsers()
          .pipe(
            map(users => new UsersSetAction({users,  usersAreLoaded: true}))
          )
      )
    )

}
