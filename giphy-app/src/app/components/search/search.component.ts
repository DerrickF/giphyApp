import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { GiphyService } from '../../shared/giphy.service';
import { SearchResult } from "../../shared/search-result-model";
import { trigger, state, animate, transition, style } from "@angular/animations";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: string;
  searchResults: SearchResult[] = [];
  loading: boolean = false;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() { }

  searchGiphy(value: string) {
    this.loading = true;
    setTimeout(() => {
      this.giphyService.search(value).subscribe(searchResults => {
        this.searchResults = searchResults;
      });
      this.loading = false;
    }, 1000);
  }




}
