import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './modules/material.module';
import { SearchComponent } from './components/search/search.component';
import {
  MdButtonModule, 
  MdCheckboxModule,
  MdInputModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
