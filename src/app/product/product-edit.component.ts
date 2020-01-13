import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productEdit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {

  id: number = 0;
  constructor(private route : ActivatedRoute) 
  { 
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}