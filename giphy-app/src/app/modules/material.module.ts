import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdCardModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSlideToggleModule

} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSlideToggleModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSlideToggleModule
  ],
})
export class MaterialModule { }