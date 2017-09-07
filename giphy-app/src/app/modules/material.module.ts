import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdCardModule,
  MdProgressBarModule,
  MdSidenavModule

} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdProgressBarModule,
    MdSidenavModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdProgressBarModule,
    MdSidenavModule
  ],
})
export class MaterialModule { }