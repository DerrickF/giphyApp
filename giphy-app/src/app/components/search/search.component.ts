import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { GiphyService } from '../../shared/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  data: any;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    
  }

  private searchGiphy(searchTerm){
    this.giphyService.search(searchTerm).subscribe(data => this.data = data);
  }

  onKey(event: any) { 
    let search = event.target.value;
    if(search.length >= 3 ){
      this.search = event.target.value;
      this.giphyService.search(search).subscribe(result => this.data = result);
    } 

  }

}
