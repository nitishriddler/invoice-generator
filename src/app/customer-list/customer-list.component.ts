import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  constructor(private router:Router,private customerService: CustomerService) {}
  customerList: any;

  ngOnInit(): void {
    this.getCoustmer();
  }
  getCoustmer() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customerList = res;
    });
  }
}
