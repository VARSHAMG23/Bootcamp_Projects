import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { Form,FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddPipe } from './pipes/add.pipe';
import { StringPipe } from './pipes/string.pipe';
import { ColorchangeDirective } from './directives/color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormComponent,
    DisplayComponent,
    AddPipe,
    StringPipe,
    ColorchangeDirective
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
