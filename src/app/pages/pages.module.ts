import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutsModule } from '../shared/layouts/layouts.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ MainComponent]
})
export class PagesModule { }
