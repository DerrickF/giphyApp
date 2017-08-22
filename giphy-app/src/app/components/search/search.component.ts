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
  giphys = [];
  loading: boolean = false;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() { }

  searchGiphy(value: string) {
    console.log('loading...');
    this.loading = true;
    setTimeout(() => {
      this.giphyService.search(value).subscribe(result => this.giphys = result.data);
      this.loading = false;
    }, 1000);
  }

  play(data:any){
    console.log('event',data);
  }


}
