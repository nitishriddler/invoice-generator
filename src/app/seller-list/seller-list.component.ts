import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/services/seller.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss'],
})
export class SellerListComponent implements OnInit {
  constructor(private router: Router, private SellerService: SellerService) {}
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'address', 'phone'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllSeller();
  }
  getAllSeller() {
    this.SellerService.getAllSeller().subscribe((res) => {
      this.dataSource = new MatTableDataSource(<any>res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
