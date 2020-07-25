import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{title}}
    </p>
    <input [value] = "title"
            (keyup)="changeTitle($event.target.value)">
    <button (click)="changeTitle('Button Clicked!')">Save</button>
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

