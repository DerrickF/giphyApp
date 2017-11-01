import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';

import * as searchActions from './search.actions';
import { SearchService } from './search.service';

export type Search = searchActions.All;

@Injectable()
export class SearchEffects {
    constructor(private actions: Actions, private searchService: SearchService) { }

    @Effect()
    getSearchResults: Observable<Action> = this.actions.ofType(searchActions.GET_SEARCH_RESULTS)
        .switchMap((action: searchActions.GetSearchResults) =>
            this.searchService.getSearchResults(action.payload)
                .map(results => ({ type: searchActions.GET_SEARCH_RESULTS_SUCCESS, payload: results }))
                .catch(() => new Observable<searchActions.GetSearchResultsFail>()));
}