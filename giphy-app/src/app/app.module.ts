import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsDetailComponent } from './components/search-results-detail/search-results-detail.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StoreModule } from '@ngrx/store';
import { sideNavReducer } from './components/sidenav/sidenav.reducer';
import { searchReducer } from './components/search/search.reducer'
import { SearchEffects } from './components/search/search.effects'
import { SearchService } from './components/search/search.service';
import { SideNavEffects } from './components/sidenav/sidenav.effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultsDetailComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    CommonModule,
    HttpModule,
    FormsModule,
    EffectsModule.forRoot([SideNavEffects, SearchEffects]),
    StoreModule.forRoot({
      sideNav: sideNavReducer,
      search: searchReducer
    }),
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
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
