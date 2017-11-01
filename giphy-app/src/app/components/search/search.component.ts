import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { trigger, state, animate, transition, style } from "@angular/animations";
import { Search } from './search.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/appState';
import * as SearchActions from './search.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  searchTerm: string;
  searchResults: any[] = [];
  loading: boolean = false;

  search: Observable<Search>;

  constructor(private store: Store<AppState>) {
    this.search = this.store.select('search');
  }

  ngOnInit() {

  }

  setSearchValue(value: string) {
    this.store.dispatch(new SearchActions.SetValue(value));
    this.getSearchResults(value);
  }

  getSearchResults(value: string) {
    this.store.dispatch(new SearchActions.GetSearchResults(value));
  }

}
