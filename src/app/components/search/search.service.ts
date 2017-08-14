import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Lfm, Artist } from '../shared/searchResults.model'
import * as xml2js from 'xml2js';



@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  searchByArtist() {
    let url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=eminem&api_key=217de7fc68941c85899664776af07c36'
    return this.http.get(url).map((res: Response) => res);
  }
}