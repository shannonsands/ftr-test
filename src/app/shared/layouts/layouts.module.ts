import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { MaterialModule } from '../modules/material/material.module';
import { ComponentsModule } from '../components/components.module';
import { PagesModule } from '../../pages/pages.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
  ],
  exports: [ DefaultComponent ]
})
export class LayoutsModule { }
