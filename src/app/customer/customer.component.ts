import { Component, OnInit } from '@angular/core';
import { customer } from '../model/customer.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer!: customer;

  constructor() {}

  ngOnInit(): void {
    this.customer = {};
  }
  postcustomerdata(data: any) {
    console.log(data);
  }
}
