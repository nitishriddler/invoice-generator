import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { SellerService } from 'src/services/seller.service';
import { forkJoin } from 'rxjs';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'sellerid',
    'customerid',
    'itemid',
    'itemQty',
    'itemprice',
    'itemamount',
    'totalamount',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private OrderService: OrderService,
    private router: Router,
    private sellerService: SellerService,
    private customerService: CustomerService
  ) {}

  sellerList: string[] = [];

  ngOnInit(): void {
    this.getOrder();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getOrder() {
    forkJoin([
      this.OrderService.getAllorder(),
      this.sellerService.getAllSeller(),
      this.customerService.getAllCustomers(),
    ]).subscribe((resArr: Array<any>) => {
      const orders = resArr[0];
      const sellers = resArr[1];
      const customer = resArr[2];

      orders.forEach((element: { sellerName: any; sellerId: any }) => {
        element.sellerName = sellers.find(
          (x: { id: any }) => x.id === element.sellerId
        )?.name;
      });
      orders.forEach((element: { customerName: any; customerId: any }) => {
        element.customerName = customer.find(
          (x: { id: any }) => x.id === element.customerId
        )?.name;
      });

      this.dataSource = new MatTableDataSource(<any>orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  
}
  