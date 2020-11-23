import { User } from '../../user.interface';
import { UsersActions, usersActionsType } from './users.actions';

export interface UsersState {
  users: User[];
  usersAreLoaded: boolean;
}

const initialState: UsersState = {
  users: [],
  usersAreLoaded: false,
};

export const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case usersActionsType.set:
      return {
        ...state,
        users: action.payLoad.users,
        usersAreLoaded: action.payLoad.usersAreLoaded
      };

    case usersActionsType.delete:
      const filteredUsers = state.users.filter(user => user.id !== action.payLoad.userId);
      return {
        ...state,
        users: filteredUsers
      };

    default:
      return state;
  }
};
