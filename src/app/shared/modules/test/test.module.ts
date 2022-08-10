import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from 'src/app/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '../../layouts/layouts.module';
import { FormsModule } from '@angular/forms';

/**
 * Use with unit tests
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    LayoutsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    FormsModule,
  ]
})
export class TestModule { }
