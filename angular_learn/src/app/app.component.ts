import { Component } from '@angular/core';
import { FetchListComponent } from "./components/fetch-list/fetch-list.component";
import { ParentComponent } from "./components/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FetchListComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
