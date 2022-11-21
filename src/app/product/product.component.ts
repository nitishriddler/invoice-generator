import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { product } from '../model/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: product;

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.product = {};
  }
  
  postAllProduct(data: any): void {
    this.productService.postAllProduct(data).subscribe({
      next:(res)=>{
        alert("Product has been added sucessfully")
        location.reload();
      },
      error:(err)=>{
        alert("Something Went worng")
      }
    })
  }

}
