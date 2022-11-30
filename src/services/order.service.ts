import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getAllorder(){
    return this.http.get('http://localhost:3000/order')
  }
  postAllorder(data:any){
    return this.http.post('http://localhost:3000/order',data)
  }
}
