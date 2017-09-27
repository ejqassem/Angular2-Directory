import { Component, OnInit } from '@angular/core';

@Component({
  // component will be added where a selector 'app-home' is found in the html
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the Ninja Directory...';

  constructor() {}

  ngOnInit() {}
}
