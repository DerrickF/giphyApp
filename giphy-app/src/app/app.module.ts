import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from "@angular/router";

import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { GiphyService } from './shared/giphy.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    //Routes
    RouterModule.forRoot([
      {
        path: 'search',
        component: SearchComponent
      }
    ])
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
