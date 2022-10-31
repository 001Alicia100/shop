
import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;

  constructor(private ordersListService: OrdersListService) { }

  ngOnInit(): void {
    this.ordersListService.getJSON().subscribe(data => {
      this.orders = data;
      console.log(data);
    });
  }

}