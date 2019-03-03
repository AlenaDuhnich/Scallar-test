import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    public productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
