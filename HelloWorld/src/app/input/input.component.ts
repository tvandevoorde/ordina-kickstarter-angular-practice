import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() addItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    this.addItem.emit(item);
  }
}
