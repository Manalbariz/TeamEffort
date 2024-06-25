import { Component } from '@angular/core';
import {USERS_MOCK} from "./utils/users-mock";
import {type User} from "./utils/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected selectedUser?: User;

  users = USERS_MOCK;
  title = 'TeamEffort';


  selectUser(id: string) {
      this.selectedUser = this.users.find((user) => user.id === id);
  }

}
