import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName : string = "Angular"
  productPrice: number = 1000;
  id: number = 2;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToProductDetail(){
    this.route.navigate(['productDetail',{name: this.productName, price: this.productPrice}]);
  }
}
