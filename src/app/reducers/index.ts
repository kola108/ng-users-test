import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { usersReducer, UsersState } from './users/users.reducer';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  users: UsersState;
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  users: usersReducer,
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
