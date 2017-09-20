import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchResult } from "./search-result-model";
import { Observable } from "rxjs/Observable";
import { AppStore } from './app-store';


@Injectable()
export class GiphyService {

  searchResults: SearchResult[] = [];
  searchTerm: string;
  searchOffset: number = 0;
  searchLimit: number;

  constructor(private http: Http, private store: AppStore) { }

  public search(searchTerm: string): Observable<SearchResult[]> {
    this.searchTerm = searchTerm;
    let key = '&api_key=a9373807d61e4fd7ab4a7f023c0dba07';

    this.store.changes
      .map(store => store.numberOfResults)
      .subscribe(number => this.searchLimit = number);

    let limit = '&limit=' + this.searchLimit.toString();

    let url = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + limit + key;
    this.searchResults = [];
    return this.http.get(url).map(res => {
      res.json().data.forEach(giphy => {
        let result = new SearchResult;
        //map all the things to other things
        result.bitlyUrl = giphy.bitly_url;
        result.creationDate = giphy.import_datetime;
        result.rating = giphy.rating;
        result.stillImageUrl = giphy.images.original_still.url;
        result.gifUrl = giphy.images.original.url;
        result.active = false;
        result.source = giphy.source_tld;
        result.id = giphy.id;

        this.searchResults.push(result);
      });
      return this.searchResults;
    })
  }

  public getSearchResults(): SearchResult[] {
    console.log(this.searchResults);
    return this.searchResults;

  }

  public togglePlayPause(searchResult: SearchResult): SearchResult {
    searchResult.active = !searchResult.active;
    return searchResult;
  }

}
