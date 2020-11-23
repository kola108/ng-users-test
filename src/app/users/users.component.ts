import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-to-do',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  usersAreLoaded = false;

  private getUsersSubscription: Subscription

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getUsersSubscription = this.appService.getUsers()
      .pipe(finalize(() => {
        this.usersAreLoaded = true;
      }))
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  removeUser(user: User): void {
    this.users = this.users.filter(item => item !== user)
  }

  ngOnDestroy(): void {
    this.getUsersSubscription.unsubscribe()
  }
}
