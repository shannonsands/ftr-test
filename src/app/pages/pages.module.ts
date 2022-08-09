import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutsModule } from '../shared/layouts/layouts.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
  ],
  exports: [ MainComponent]
})
export class PagesModule { }
