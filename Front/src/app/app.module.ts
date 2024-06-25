import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {HeaderComponent} from "./header/header.component";
import {CardComponent} from "./shared/card/card.component";
import {AddTaskFormComponent} from "./tasks/add-task-form/add-task-form.component";
import {TaskComponent} from "./tasks/task/task.component";
import {TasksComponent} from "./tasks/tasks.component";
import {UserComponent} from "./user/user.component";
import {AppComponent} from "./app.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations:[
    AppComponent,
    AuthComponent,
    HeaderComponent,
    CardComponent,
    AddTaskFormComponent,
    TaskComponent,
    TasksComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DatePipe,
    FormsModule,
    NgIf,
    NgForOf,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  })

export class AppModule { }
