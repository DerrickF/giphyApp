import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from "../../shared/giphy.service";
import { SearchResult } from "../../shared/search-result-model";

@Component({
  selector: 'app-search-results-detail',
  templateUrl: './search-results-detail.component.html',
  styleUrls: ['./search-results-detail.component.css']
})
export class SearchResultsDetailComponent implements OnInit {
  id: string;
  searchResults: SearchResult[];
  private sub: any;
  giphy: SearchResult


  constructor(private route: ActivatedRoute, private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.searchResults = this.giphyService.getSearchResults();
    this.giphy = this.searchResults.find(x => x.id == this.id);

  }
}
