import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdSidenav } from '@angular/material';
import { AppStore } from '../../shared/app-store';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public limit: number = 10;


  constructor(private store: AppStore) { }

  ngOnInit() {

  }

  setLimit() {
    let numberOfResults = this.limit;
    console.log('checked: ', this.limit);
    const currentState = this.store.getState();
    this.store.setState(Object.assign({}, currentState, { numberOfResults }))
  }






}
