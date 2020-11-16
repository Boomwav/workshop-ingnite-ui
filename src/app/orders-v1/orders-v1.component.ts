import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-v1',
  templateUrl: './orders-v1.component.html',
  styleUrls: ['./orders-v1.component.scss']
})
export class OrdersV1Component implements OnInit {

  orders$: Observable<Order[]>;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders();
  }

}
