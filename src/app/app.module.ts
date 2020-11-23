import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppService } from './app.service';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgUsersComponent } from './ng-users/ng-users.component';
import { NgUserComponent } from './ng-users/ng-user/ng-user.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './effects/users.effects';
import { metaReducers, reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomePageComponent,
    UserComponent,
    NgUsersComponent,
    NgUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent},
      {path: 'ng-users', component: NgUsersComponent},
      {path: 'home', component: HomePageComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UsersEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
