import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productDetail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  productName : string = "";
  productPrize : number = 0;

  constructor(private route : ActivatedRoute) {
        this.productName = this.route.snapshot.paramMap.get('name');
        this.productPrize = parseInt(this.route.snapshot.paramMap.get('price'));
   }

  ngOnInit() {
  }

}