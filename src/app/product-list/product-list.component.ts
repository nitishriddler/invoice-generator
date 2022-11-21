import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private router:Router, private productService: ProductService) {}
  productList: any;
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getProduct();
  }
  displayedColumns: string[]=['id','name','Qty','Mrp']

  getProduct() {
    this.productService.getAllProduct().subscribe((res) => {
      this.productList = res;
      this.dataSource = new MatTableDataSource(<any>res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
