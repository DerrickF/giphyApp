import { Component, OnInit, Inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import * as xml2js from 'xml2js';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Lfm, Artist } from '../shared/searchResults.model'
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
  artistsArray: Artist[];

  constructor(private http:Http, private searchService: SearchService) {}

  ngOnInit() {
    //this.getArtistData();
    this.addDefaultImage();
  }

  //sub stock image if image is empty
  private addDefaultImage(){
    let tmp = this.searchService.searchByArtist().subscribe((x) => tmp);
    console.log('tmp', tmp);
    console.log('array: ', this.artistsArray); 
    console.log('search results: ', this.searchResults); 
  }

  private getArtistData(){
    let parser = new xml2js.Parser();
    this.searchService.searchByArtist().subscribe(data => {
      console.log('data from service: ', data);
      let stuff = data['_body'];
      let cleanStuff = stuff.replace("\ufeff", "");
      parser.parseString(cleanStuff, (e, result) => {
        if(e){
          console.log('error: ', e)
        }
        this.artistsArray = result.lfm.results["0"].artistmatches["0"].artist;
        console.log('artist array', this.artistsArray);
      });
    });
  }

}
