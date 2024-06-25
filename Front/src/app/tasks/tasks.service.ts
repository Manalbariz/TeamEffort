import {TASKS_MOCK} from "../utils/tasks-mock";
import {Task} from "../utils/task";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class TaskService {

  private tasks = TASKS_MOCK;

  constructor() {
    const tasks = localStorage.getItem("tasks");

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  newTask(task: Task){
    this.tasks.push(task);
    this.saveTasks();


  }

  displayTasks(userId: string): Task[]{
    return this.tasks.filter((task) => task.userId === userId);
  }

  onCompletedTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
    return this.tasks;
  }

  private saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

}
