import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

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
  title = 'Test Angular application';
  name = 'My name is Eyad';
}
