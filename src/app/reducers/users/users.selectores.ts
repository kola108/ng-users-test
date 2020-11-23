import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../user.interface';
import { UsersState } from './users.reducer';

const selectUsersFeature = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState): User[] => state.users
)

export const selectUsersAreLoaded = createSelector(
  selectUsersFeature,
  (state: UsersState): boolean => state.usersAreLoaded
)
