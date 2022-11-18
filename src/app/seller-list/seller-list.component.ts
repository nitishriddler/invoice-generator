import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/services/seller.service';


@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss']
})
export class SellerListComponent implements OnInit {

  constructor(private router:Router, private SellerService:SellerService) { }
  sellerList:any;

  ngOnInit(): void {
    this.getAllSeller();
  }
 getAllSeller(){
  this.SellerService.getAllSeller().subscribe(res =>{
    this.sellerList = res;
  })

 }
}
