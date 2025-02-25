import { Component } from '@angular/core';
import { FetchListComponent } from "./components/fetch-list/fetch-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FetchListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
