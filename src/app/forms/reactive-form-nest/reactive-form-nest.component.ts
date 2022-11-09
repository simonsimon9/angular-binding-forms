import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//to add a form group to this component, take the following steps
//1. create formgroup instance
//2. associate the formgroup model and view
//3. save form data
@Component({
  selector: 'app-reactive-form-nest',
  templateUrl: './reactive-form-nest.component.html',
  styleUrls: ['./reactive-form-nest.component.css'],
})
export class ReactiveFormNestComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor() {}

  ngOnInit() {}
  
  onSubmit(): void {
    console.log(this.profileForm.value);
  }
}
