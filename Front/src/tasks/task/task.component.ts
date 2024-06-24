import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../utils/task";
import {DatePipe} from "@angular/common";
import {CardComponent} from "../../app/shared/card/card.component";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
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
