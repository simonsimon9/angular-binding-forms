import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-event',
  templateUrl: './child-event.component.html',
  styleUrls: ['./child-event.component.css'],
})
export class ChildEventComponent implements OnInit {
  @Output() callChildEvent = new EventEmitter<string>();
  name: FormControl = new FormControl('');
  constructor() {}

  ngOnInit() {}

  childEvent() {
    console.log('emit pressed');
    this.callChildEvent.emit(this.name.value);
  }
}
