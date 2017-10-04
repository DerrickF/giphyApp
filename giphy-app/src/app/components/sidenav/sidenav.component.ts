import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdSidenav } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET, SET } from '../search/searchLimitReducer';
import { AppState } from '../../shared/appState'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public limit: Observable<number>;
  public sliderValue: number;

  constructor(private store: Store<AppState>) {
    this.limit = store.select('searchLimit');
  }

  ngOnInit() {
    this.limit.subscribe(value => {
      this.sliderValue = value;
    })
  }

  update($event) {
    this.store.dispatch({ type: SET, payload: { value: $event.value } })
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }






}
