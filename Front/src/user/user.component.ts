import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgForOf} from "@angular/common";
import {User} from "../utils/user";
import {CardComponent} from "../app/shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required: true}) user!: User;


  @Input({required: true}) isSelected!: boolean;
  @Output() selected = new EventEmitter<string>();

  imagePath() {
    return '../assets/users/'+ this.user.avatar;
  }

  onSelectedUser(){
    this.selected.emit(this.user.id)
  }
}
