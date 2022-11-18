import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/services/seller.service';
import { seller } from '../model/seller.model';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  seller!:seller

  constructor(private sellerService:SellerService) { }

  ngOnInit(): void {
    this.seller = {};
  }
  postAllSeller(data: any){
    this.sellerService.postAllSeller(data).subscribe({
      next:(res)=>{
        alert("Detail of seller has been submited")
        location.reload(); 
      },
      error:(err)=>{
        alert("Something went wrong")
      }
    })
  }

}
