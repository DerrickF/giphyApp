import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../shared/animations/fade-in';
import { buttonFadeInAnimation } from '../../shared/animations/button-fade-in';
import { AppState } from '../../shared/appState';
import { Search } from '../search/search.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-results-detail',
  templateUrl: './search-results-detail.component.html',
  styleUrls: ['./search-results-detail.component.css'],
  animations: [fadeInAnimation, buttonFadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class SearchResultsDetailComponent implements OnInit {
  id: string;
  search: Observable<Search>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.search = this.store.select('search');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
