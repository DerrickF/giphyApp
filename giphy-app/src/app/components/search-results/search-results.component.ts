import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from "../../shared/search-result-model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }
  @Input() searchResults: SearchResult
  ngOnInit() {
  }

  play(index: number) {
    this.searchResults[index].active = !this.searchResults[index].active
  }

}
