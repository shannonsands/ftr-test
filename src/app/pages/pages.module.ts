import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutsModule } from '../shared/layouts/layouts.module';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    MaterialModule
  ],
  exports: [ MainComponent]
})
export class PagesModule { }
