import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "auth", component: AuthComponent}
];
