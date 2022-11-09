import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

//three steps to add form control
//1. Register reactive form module to app
//2. generate new form control instance and save it to the component
//3. register form control in template
@Component({
  selector: 'app-reactive-basic-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormBasicComponent implements OnInit {
  basicFormName = new FormControl(''); //basic

  constructor() {}

  ngOnInit() {}

  updateValueBasicForm(): void {
    console.log(this.basicFormName.value);
    this.basicFormName.setValue('default');
    console.log(this.basicFormName.value);
  }
}
