import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentVariable: string;
  eventBindVariable;
  constructor() {}

  ngOnInit() {
    this.parentVariable = 'hey from parent';
  }

  parentFunc(event) {
    console.log('from parent' + event);
    this.eventBindVariable = event;
  }
}
