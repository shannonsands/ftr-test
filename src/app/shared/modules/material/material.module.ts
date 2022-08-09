import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

// Prevent clutter in the app module by packaging material modules here
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[ MatButtonModule ]
})
export class MaterialModule { }
