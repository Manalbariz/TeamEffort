import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {AddTaskFormComponent} from "./add-task-form/add-task-form.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TaskComponent, TasksComponent, AddTaskFormComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})

export class TasksModule {}
