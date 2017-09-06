import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from "../../shared/search-result-model";
import { GiphyService } from "../../shared/giphy.service";
import { cardSlideInAnimation } from "../../shared/animations/card-slide-in";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  animations: [cardSlideInAnimation],
})
export class SearchResultsComponent implements OnInit {

  constructor(private giphyService: GiphyService) { }
  @Input() searchResults: SearchResult[]
  ngOnInit() {
  }

  play(index: number) {
    let giffToPlay = this.searchResults[index];
    this.giphyService.togglePlayPause(giffToPlay);
  }

}
