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
  MdSlideToggleModule,
  MatSliderModule

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
    MdSlideToggleModule,
    MatSliderModule
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
    MdSlideToggleModule,
    MatSliderModule
  ],
})
export class MaterialModule { }