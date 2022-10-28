import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsListService]
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productsListService : ProductsListService ) {  
  }

  ngOnInit(): void { 
    this.productsListService.getJSON().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

}
