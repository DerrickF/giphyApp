import { Component, Input } from '@angular/core';
import { cardSlideInAnimation } from "../../shared/animations/card-slide-in";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  animations: [cardSlideInAnimation],
})
export class SearchResultsComponent {

  @Input() searchResults: any[];


}
