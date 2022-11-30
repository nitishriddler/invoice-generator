import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/services/seller.service';
import { CustomerService } from 'src/services/customer.service';
import { ProductService } from 'src/services/product.service';
import { product } from '../model/product.model';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  sellerList!: Array<any>;
  customerList!: Array<any>;
  productList!: Array<any>;
  addedProducts!: Array<any>;
  seller: any = {};
  customer: any = {};

  constructor(
    private sellerService: SellerService,
    private customerService: CustomerService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.getAllSeller();
    this.getAllCustomers();
    this.getAllProduct();
    this.addedProducts = [{}];
  }

  getAllSeller() {
    this.sellerService.getAllSeller().subscribe((res: any) => {
      this.sellerList = res;
    });
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res: any) => {
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

  deleteItem(index: number) {
    this.addedProducts.splice(index, 1);
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
      return p + (isNaN(c.amount) ? 0 : c.amount);
    }, 0);
  }

  sellerChanged(event: any) {
    this.seller = this.sellerList.find((x) => x.id === event.value);
  }

  customerChanged(event: any) {
    this.customer = this.customerList.find((x) => x.id === event.value);
  }

  postAllorder(form: NgForm) {
    if (!form.invalid) {
      form.value.totalAmount = this.totalAmount;
      this.orderService.postAllorder(form.value).subscribe({
        next: (res) => {
          alert('Detail of order has been saved');
          location.reload();
        },
        error: (er) => {
          'something went wrong';
        },
      });
    }
  }
}
