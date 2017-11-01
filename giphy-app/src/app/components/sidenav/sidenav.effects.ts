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
import 'rxjs/add/operator/do';

import * as searchActions from '../search/search.actions';
import * as sideNavActions from './sidenav.actions';

export type Search = searchActions.All;

@Injectable()
export class SideNavEffects {
    constructor(private actions: Actions) { }

    @Effect()
    // getSearchResults: Observable<Action> = this.actions.ofType(sideNavActions.TOGGLE)
    //     .map((action: sideNavActions.ToggleAutoPlay) => {
    //         return { type: searchActions.TOGGLE_PLAY_ALL, payload: !action.payload }
    //     });
    getSearchResults: Observable<Action> = this.actions.ofType<sideNavActions.ToggleAutoPlay>(sideNavActions.TOGGLE)
        .map(action => new searchActions.TogglePlayAll(action.payload))

}