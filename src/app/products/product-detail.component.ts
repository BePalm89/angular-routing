import {Component, OnInit} from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.resolvedData);
    const resolvedData = this.activatedRoute.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
