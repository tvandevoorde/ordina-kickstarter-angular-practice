import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: string;
  list: string[];

  constructor() {
    this.list = [];
  }

  add() {
    this.list.push(this.item);
  }
}
