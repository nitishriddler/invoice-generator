import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/services/customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  constructor(private router:Router,private customerService: CustomerService) {}
  dataSource!: MatTableDataSource<any>
  displayedColumns: String[] =['id','name','address','phone']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getCoustmer();
  }
  getCoustmer() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.dataSource = new MatTableDataSource(<any>res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
