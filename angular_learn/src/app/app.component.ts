import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post.service';
import { TodoComponent } from "./components/todo/todo.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    todos= [
      {id: 1, title: 'todo 1', completed: false},
      {id: 2, title: 'todo 2', completed: false},
      {id: 3, title: 'todo 3', completed: false},
      {id: 4, title: 'todo 1', completed: false},
      {id: 5, title: 'todo 2', completed: false},
      {id: 6, title: 'todo 3', completed: false},
    ];

    onDeleteToDo(todoId: number){
        this.todos = this.todos.filter(todo => todo.id !== todoId);
    }


}
