import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../components/product-item/product-item.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductsService } from '../services/products.service';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent
  ],
  providers: [ProductsService],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductsComponent, ProductItemComponent]
})
export class ProductsModule { }
