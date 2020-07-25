import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class= "todo-input" #inputElementRef
            [value] = "title"
            (keyup.enter)="submitValue($event.target.value)" >
    <button class="btn" (click)="submitValue(inputElementRef.val)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  constructor() { }
  ngOnInit() {
  }
submitValue(newTitle: string) {
  this.submit.emit(newTitle);
  }
@Output() submit: EventEmitter<string> = new EventEmitter();
}

