import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productList: any;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getAllProduct().subscribe((res) => {
      this.productList = res;
    });
  }
}
