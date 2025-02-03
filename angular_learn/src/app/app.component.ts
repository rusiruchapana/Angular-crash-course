import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  posts : any[] = [];
  constructor(private post_service: PostService){

  }

  ngOnInit(){
    this.post_service.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }



  
}
