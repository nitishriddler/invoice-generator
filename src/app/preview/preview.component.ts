import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/services/order.service';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  orderView:any

  constructor(
    private OrderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((x) => {
      if (x.has('id')) {
        let id = x.get('id');
        this.getOrder(id);
      } else {
      }
    });
  }
  getOrder(id:any) {
    this.OrderService.getOrder(id).subscribe(res=>{
      this.orderView = res
    })
  }
}
