import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdCardModule

} from '@angular/material';

import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule
  ],
})
export class MaterialModule { }