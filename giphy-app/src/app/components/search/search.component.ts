import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { GiphyService } from '../../shared/giphy.service';
import { SearchResult } from "../../shared/search-result-model";
import { trigger, state, animate, transition, style } from "@angular/animations";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('loading', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class SearchComponent implements OnInit {
  search: string;
  giphys: SearchResult[] = [];
  loading: boolean = false;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() { }

  searchGiphy(value: string) {
    this.loading = true;
    setTimeout(() => {
      this.giphyService.search(value).subscribe(searchResults => {
        this.giphys = searchResults;
      });
      this.loading = false;
    }, 1000);
  }

  play(index: number) {

    this.giphys[index].active = !this.giphys[index].active
    console.log('event', index);
  }


}
