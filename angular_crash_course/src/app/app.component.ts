import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringInterpolationComponent } from "./string-interpolation/string-interpolation.component";
import { TwoWayDataBindComponent } from "./two-way-data-bind/two-way-data-bind.component";
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [StringInterpolationComponent, TwoWayDataBindComponent, FormsModule, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_crash_course';
}
