import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { CommanModule } from '../comman/comman.module';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommanModule
  ]
})
export class LayoutModule { }
