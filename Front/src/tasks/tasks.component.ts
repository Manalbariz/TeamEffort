import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TaskComponent} from "./task/task.component";
import {Task} from "../utils/task";
import {AddTaskFormComponent} from "./add-task-form/add-task-form.component";
import {TASKS_MOCK} from "../utils/tasks-mock";
import {TaskService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgIf,
    TaskComponent,
    NgForOf,
    AddTaskFormComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required: true}) name!: string;

  @Input({required: true}) userId!: string;

  displayAddTaskForm = false;

  constructor(private taskService: TaskService) {}


  addTasks(){
    this.displayAddTaskForm = true;
  }


  closeAddingTask(){
    this.displayAddTaskForm = false;
  }

  get displayTasks(): Task[]{
    return  this.taskService.displayTasks(this.userId);
  }

}
