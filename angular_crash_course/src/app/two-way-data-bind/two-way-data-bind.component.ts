import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-bind',
  imports: [FormsModule],
  templateUrl: './two-way-data-bind.component.html',
  styleUrl: './two-way-data-bind.component.css'
})
export class TwoWayDataBindComponent {
    username: string = '';
}
