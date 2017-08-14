import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Lfm, Artist } from '../shared/searchResults.model'
import * as xml2js from 'xml2js';



@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  searchByArtist():any {
    let parser = new xml2js.Parser();
    let artists: Artist[];
    let url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=eminem&api_key=217de7fc68941c85899664776af07c36'
    return this.http.get(url).subscribe(data => {
      console.log('data from service: ', data);
      let stuff = data['_body'];
      let cleanStuff = stuff.replace("\ufeff", "");
      parser.parseString(cleanStuff, (e, result) => {
        if(e){
          console.log('error: ', e)
        }
        return result.lfm.results["0"].artistmatches["0"].artist;
        // console.log('artist array', this.artistsArray);
      });   
  })}

}


//  let parser = new xml2js.Parser();
//     return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=eminem&api_key=217de7fc68941c85899664776af07c36')
//               .subscribe(data => {
//                let stuff = data['_body'];
//                let cleanStuff = stuff.replace("\ufeff", "");
//                 parser.parseString(cleanStuff, (e, result) => {
//                   if(e){
//                     console.log('error: ', e)
//                   }
//                   return result this.artistsArray = result.lfm.results["0"].artistmatches["0"].artist;
//                   console.log('artist array', this.artistsArray);
//                 });
//               });