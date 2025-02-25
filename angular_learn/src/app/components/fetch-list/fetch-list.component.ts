import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-list',
  imports: [CommonModule],
  templateUrl: './fetch-list.component.html',
  styleUrl: './fetch-list.component.css'
})
export class FetchListComponent implements OnInit {
  constructor() { }

  posts: any[] = []; 

  private dataService = new DataService();

  ngOnInit(): void {
    this.dataService.getItems().subscribe(data=> this.posts = data);
  }

}
