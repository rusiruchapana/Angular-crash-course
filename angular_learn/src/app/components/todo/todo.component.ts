import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todos: any[] = [];
  @Output() deleteToDo = new EventEmitter<number>();


  deleteTodoItem(todoId: number) {
    this.deleteToDo.emit(todoId);

  }
}
