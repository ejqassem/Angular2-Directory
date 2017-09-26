import { Component } from '@angular/core';

@Component({
  // selector = id that is replaced with component html
  selector: 'app-root',
  // templateUrl = output that replaces selector
  templateUrl: './app.component.html',
  // CSS styling for view (only targets individual component)
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties on the class available to the template
  title = 'app works! forreal doe';
}
