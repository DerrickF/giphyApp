import { Component, OnInit, Inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import * as xml2js from 'xml2js';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Lfm, Artist } from '../shared/searchResults.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myData: Array<any>;
  searchResults: Lfm;
  artistsArray: Artist;

  constructor(private http:Http) {

    let parser = new xml2js.Parser();

    this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=eminem&api_key=217de7fc68941c85899664776af07c36')
              .subscribe(data => {
               let stuff = data['_body'];
               let cleanStuff = stuff.replace("\ufeff", "");

              parser.parseString(cleanStuff, (e, result) => {
                if(e){
                  console.log('error: ', e)
                }
                this.artistsArray = result.lfm.results["0"].artistmatches["0"].artist;
                console.log('search result', this.artistsArray);
              });
               
              });
      
   }

  ngOnInit() {
  
  }

  private fixImageUrl(){
   
      
  }

}
