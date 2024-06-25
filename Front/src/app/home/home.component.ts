import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import type {User} from "../utils/user";
import {USERS_MOCK} from "../utils/users-mock";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected selectedUser?: User;

  users = USERS_MOCK;
  title = 'TeamEffort';


  selectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
