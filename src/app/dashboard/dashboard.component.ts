import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  userdata: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userdata = this.route.snapshot.data.userdata; // get data from resolver
    console.log(this.userdata);
  }

}