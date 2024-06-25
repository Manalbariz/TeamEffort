import {Component, Input} from '@angular/core';
import {Task} from "../../utils/task";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;

  constructor(private taskService: TaskService) {}


  onCompleted(){
    this.taskService.onCompletedTask(this.task.id);
  }



}
