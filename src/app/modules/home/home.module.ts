import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../../products/products.module';
import { HomeComponent } from '../../components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
