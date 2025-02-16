import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {
  message: string = 'Hello World!';
  age: number = 25;


  getMessage() : string {
    return "Rusiru chapana";
  }

}
