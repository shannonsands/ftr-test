import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
