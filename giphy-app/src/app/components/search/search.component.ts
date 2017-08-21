import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { GiphyService } from '../../shared/giphy.service';
import { Giphy } from '../../shared/giphy';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  giphy: Giphy;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.searchGiphy('example');
  }

  searchGiphy(value: string) {
    this.giphyService.search(this.search).subscribe(result => this.giphy = result.data[0]);
    console.log(this.giphy);
  }

}
