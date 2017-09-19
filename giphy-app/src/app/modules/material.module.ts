import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdCardModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdProgressSpinnerModule,
  MdRadioModule

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
    MdRadioModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdRadioModule
  ],
})
export class MaterialModule { }