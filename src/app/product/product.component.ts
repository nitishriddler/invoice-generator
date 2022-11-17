import { Component, OnInit } from '@angular/core';
import { product } from '../model/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products!: Array<product>;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
