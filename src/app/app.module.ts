import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormBasicComponent } from './forms/reactive-form-basic/reactive-form.component';
import { ReactiveFormNestComponent } from './forms/reactive-form-nest/reactive-form-nest.component';
import { ReactiveFormBuilderComponent } from './forms/reactive-form-builder/reactive-form-builder.component';
import { ChildPropertyComponent } from './binding/parent/child-property/child-property.component';
import { ParentComponent } from './binding/parent/parent.component';
import { ChildEventComponent } from './binding/parent/child-event/child-event.component';
import { TwoWayComponent } from './binding/parent/two-way/two-way.component';
import { LocalComponent } from './binding/parent/local/local.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ReactiveFormBasicComponent,
    ReactiveFormNestComponent,
    ReactiveFormBuilderComponent,
    ChildPropertyComponent,
    ParentComponent,
    ChildEventComponent,
    TwoWayComponent,
    LocalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
