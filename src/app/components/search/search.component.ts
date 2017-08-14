import { Component, OnInit, Inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import * as xml2js from 'xml2js';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Lfm, Artist, Artistmatch } from '../shared/searchResults.model'
import { SortPipe } from '../shared/sort-by.pipe';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myData: Array<any>;
  searchResults: Lfm;
  artistsArray: Artist[] = [];
  artistMatches: Artistmatch[];

  constructor(private http: Http, private searchService: SearchService) { }

  ngOnInit() {
    this.getArtistData();
    this.addDefaultImage();
  }

  //sub stock image if image is empty
  private addDefaultImage() {
    console.log('artists array: ', this.searchResults);
  }

  private getArtistData() {
    this.searchService.searchByArtist().subscribe(response => {
      let xml = response.text();
      // this.artistsArray = this.parseXml(xml).results["0"].artistmatches;
      this.parseXml(xml).then(data => {
        let lfm = data as Lfm;
        let tmp = lfm.results["artistmatches"];
        console.log(tmp);
        this.addDefaultImage();
      });

    });
  }

  private parseXml(xml: string) {
    let parser = new xml2js.Parser();
    return new Promise((resolve, reject) => parser.parseString(xml, (error, result) => {
      if (error) reject(error);
      else (resolve(result));
    }));
    // parser.parseString(xml, (err, result) => {
    //   parsedResult = result;
    // });
    // return parsedResult as Lfm;
  }

}
