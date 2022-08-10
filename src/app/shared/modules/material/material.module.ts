import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
// Prevent clutter in the app module by packaging material modules here
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports:[ MatButtonModule, MatSidenavModule ]
})
export class MaterialModule { }
