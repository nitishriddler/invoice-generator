import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { customer } from '../model/customer.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer!: customer;

  constructor(private coustmerService: CustomerService) {}

  ngOnInit(): void {
    this.customer = {};
  }
  postAllcustomer(data: any) {
    this.coustmerService.postAllCustomer(data).subscribe({
      next: (res) => {
        alert('Detail of customer has been saved');
        location.reload();
      },
      error: (er) => {
        'Something went wrong ';
      },
    });
  }
}
