import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../shared/appState'
import { SideNav } from './sidenav.model';
import * as SideNavActions from './sidenav.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  sliderValue: number;
  sideNav: Observable<SideNav>;

  constructor(private store: Store<AppState>) {
    this.sideNav = this.store.select('sideNav');
  }

  ngOnInit() {

  }

  toggle(value: boolean) {
    this.store.dispatch(new SideNavActions.ToggleAutoPlay(value));
  }

  increment() {
    this.store.dispatch(new SideNavActions.Increment());
  }

  decrement() {
    this.store.dispatch(new SideNavActions.Decrement());
  }

  reset() {
    this.store.dispatch(new SideNavActions.Reset());
  }

  setValue(value: number) {
    this.store.dispatch(new SideNavActions.SetValue(value));
  }
}
