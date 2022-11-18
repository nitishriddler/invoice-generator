import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private router:Router, private productService: ProductService) {}
  productList: any;

  ngOnInit(): void {
    this.getProduct();
  }
  displayedColumns: string[]=['id','name','Qty','Mrp']

  getProduct() {
    this.productService.getAllProduct().subscribe((res) => {
      this.productList = res;
    });
  }
}
