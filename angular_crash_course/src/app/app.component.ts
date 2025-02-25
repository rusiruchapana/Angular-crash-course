import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringInterpolationComponent } from "./string-interpolation/string-interpolation.component";
import { TwoWayDataBindComponent } from "./two-way-data-bind/two-way-data-bind.component";
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { DirectivesPractiseComponent } from "./directives-practise/directives-practise.component";

@Component({
  selector: 'app-root',
  imports: [StringInterpolationComponent,
    TwoWayDataBindComponent,
    FormsModule,
    HighlightDirective,
    CommonModule, DirectivesPractiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    

}
