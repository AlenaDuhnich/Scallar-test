import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from '../components/products/products.component';

const productRoutes: Routes = [
  { path: 'products',  component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
