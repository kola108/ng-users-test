import { Action } from '@ngrx/store';
import { User } from '../../user.interface';

export enum usersActionsType {
  set = '[USERS] set',
  delete = '[USERS] delete',
  fetch = '[USERS] fetch'
}

export class UsersSetAction implements Action {
  readonly type = usersActionsType.set;

  constructor(public payLoad?: {users: User[], usersAreLoaded: boolean}) {
  }
}

export class UsersDeleteAction implements Action {
  readonly type = usersActionsType.delete;

  constructor(public payLoad: {userId: number | string}) {
  }
}

export class UsersFetchAction implements Action {
  readonly type = usersActionsType.fetch;
}

export type UsersActions = UsersSetAction
  | UsersDeleteAction
  | UsersFetchAction
