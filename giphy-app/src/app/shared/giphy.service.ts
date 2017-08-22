import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchResult } from "./search-result-model";
import { Observable } from "rxjs/Observable";


@Injectable()
export class GiphyService {

  constructor(private http: Http) { }

  public search(searchTerm: string): Observable<SearchResult[]> {
    let key = '&api_key=a9373807d61e4fd7ab4a7f023c0dba07';
    let limit = '&limit=8';
    let url = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + limit + key;
    let searchResults: SearchResult[] = [];

    return this.http.get(url).map(res => {
      res.json().data.forEach(giphy => {

        let result = new SearchResult;

        result.bitlyUrl = giphy.bitly_url;
        result.creationDate = giphy.import_datetime;
        result.rating = giphy.rating;
        result.stillImageUrl = giphy.images.original_still.url;
        result.gifUrl = giphy.images.original.url;
        result.active = false;
        result.source = giphy.source_tld;

        searchResults.push(result);
      });
      return searchResults;
    })

  }

}
