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
  data: any = {};

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.search = '';
  }

  onEnter(value: string) {
    this.search = value;
    this.giphyService.search(this.search).subscribe(result => this.data = result);
  }

}
