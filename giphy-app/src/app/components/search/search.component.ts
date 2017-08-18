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

  onKey(event: any) { 
    let search = event.target.value;
    if(search.length >= 3 ){
      setTimeout(() => {
              this.giphyService.search(search).subscribe(result => this.data = result);
          }, 1000);
    } 
  }

}
