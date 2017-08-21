import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

  constructor(private http: Http) { }

  public search(searchTerm: string) {
    let key = '&api_key=a9373807d61e4fd7ab4a7f023c0dba07';
    let limit = '&limit=8';
    let url = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + limit + key;

    return this.http.get(url)
      .map((res: Response) => res.json());
  }

}
