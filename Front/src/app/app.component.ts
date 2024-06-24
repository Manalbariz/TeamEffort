import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../header/header.component";
import {UserComponent} from "../user/user.component";
import {USERS_MOCK} from "../utils/users-mock";
import {NgForOf, NgIf} from "@angular/common";
import {TasksComponent} from "../tasks/tasks.component";
import {type User} from "../utils/user";
import {AddTaskFormComponent} from "../tasks/add-task-form/add-task-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, NgForOf, TasksComponent, NgIf, AddTaskFormComponent],
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
