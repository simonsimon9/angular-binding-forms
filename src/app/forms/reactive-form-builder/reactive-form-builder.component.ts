import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/User';

//1. import the formbuilder class
//2. inject form builder service
//3. generate the form contents
@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css'],
})
export class ReactiveFormBuilderComponent implements OnInit {
  profileForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
    });
  }
  //this.porfileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // })

  onSubmit() {
    console.log('hi');
    console.log(this.profileForm.value);
    this.user = {
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
    };
  }
}
