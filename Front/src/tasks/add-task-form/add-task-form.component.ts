import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Task} from "../../utils/task";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss'
})
export class AddTaskFormComponent {
  @Input({required: true}) taskUserId!: string;

  @Output() close = new EventEmitter<void>();

  taskTitle = '';
  taskSummary = '';
  taskDate = '';

  newTask?: Task;

  constructor(private taskService: TaskService,) {}


  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.taskService.newTask({
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
      userId: this.taskUserId,
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDate
    });
    this.close.emit();
  }
}
