import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/appState';
import { SideNav } from '../sidenav/sidenav.model';

@Injectable()
export class SearchService {
    options: Observable<SideNav>;
    limit: number;

    constructor(private http: Http, private store: Store<AppState>) {
        this.options = this.store.select('sideNav');
        this.options.subscribe(options => {
            this.limit = options.searchLimit;
        })
    }

    public getSearchResults(searchTerm: string): Observable<any> {
        let key = '&api_key=a9373807d61e4fd7ab4a7f023c0dba07';
        let limit = '&limit=' + this.limit;
        let url = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + limit + key;
        return this.http.get(url).map(res => {
            return res.json().data;
        });
    }


}
