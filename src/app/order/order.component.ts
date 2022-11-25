import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/services/seller.service';
import { CustomerService } from 'src/services/customer.service';
import { ProductService } from 'src/services/product.service';
import { product } from '../model/product.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  sellerList: any;
  customerList: any;
  productList!: Array<any>;
  addedProducts!: Array<any>;

  constructor(
    private sellerService: SellerService,
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllSeller();
    this.getAllCustomers();
    this.getAllProduct();
    this.addedProducts = [{}];
  }

  getAllSeller() {
    this.sellerService.getAllSeller().subscribe((res) => {
      this.sellerList = res;
    });
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customerList = res;
    });
  }
  getAllProduct() {
    this.productService.getAllProduct().subscribe((res: any) => {
      this.productList = res;
    });
  }

  addItem() {
    this.addedProducts.push({});
  }

 
  calculateAmount(item: any) {
    let product = this.productList.find((x) => x.id == item.id);
    if (product) {
      item.mrp = product.Mrp;
      item.amount = product.Mrp * item.qty;
    }
  }

  get totalAmount() {
    return this.addedProducts.reduce((p, c) => {
      return p + (isNaN(c.amount) ? 0: c.amount );
    }, 0);
  }
}
