import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {AppComponent} from "./app.component";
import {NgForOf, NgIf} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "./shared/shared.module";
import {TasksModule} from "./tasks/tasks.module";

@NgModule({
  declarations:[
    AppComponent,
    AuthComponent,
    HeaderComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule,
    NgIf,
    NgForOf,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  })

export class AppModule { }
