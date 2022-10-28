import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productProp: any; 
  @Input() productDetails: any; 

  _showDetails = false;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.productProp);
  }

  @Input()
  public set showDetails(show: boolean) {
    this._showDetails = show;
  }
}
