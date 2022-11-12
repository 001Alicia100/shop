import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() orderProp: any; 
  
  product_detail: any;
  products: any;
  show_details = false;

  constructor() { }

  ngOnInit(): void {
    this.products = this.orderProp.products;
    console.log(this.products);
  }

  product_details(product: any): void {
    this.product_detail = product;
    console.log(this.product_detail);
    this.show_details=true;
  }

}
