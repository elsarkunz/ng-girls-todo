import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
            [value] = "title"
            (keyup)="changeTitle(inputElementRef)">
    <button (click)="changeTitle(inputElementRef)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  constructor() { }
  ngOnInit() {
  }
changeTitle(newTitle: string) {
  this.title = newTitle;
  }
}

