import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';


import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsDetailComponent } from './components/search-results-detail/search-results-detail.component';
import { GiphyService } from './shared/giphy.service';
import { AppStore } from './shared/app-store';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultsDetailComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    //Routes
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent,
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: SearchResultsDetailComponent
      },
    ])
  ],
  providers: [GiphyService, AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
