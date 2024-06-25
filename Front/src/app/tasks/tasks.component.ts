import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../utils/task";
import {TaskService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
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
