import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-property',
  templateUrl: './child-property.component.html',
  styleUrls: ['./child-property.component.css'],
})
export class ChildPropertyComponent implements OnInit {
  @Input() childVariable: string;
  constructor() {}

  ngOnInit() {}
}
