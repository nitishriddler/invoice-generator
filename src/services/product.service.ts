import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private https:HttpClient) { }
  
  getAllProduct(){
    return this.https.get('http://localhost:3000/product');
    
  }


}
