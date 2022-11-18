import { Component, OnInit } from '@angular/core';
import { seller } from '../model/seller.model';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  seller!:seller

  constructor() { }

  ngOnInit(): void {
    this.seller = {};
  }
  postsellerdata(data: any){
    console.log(data);
  }

}
