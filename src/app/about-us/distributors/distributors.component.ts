import { Component, OnInit } from '@angular/core';
import { DISTRIBUTORSLIST } from './distributors-list.component';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})

export class DistributorsComponent implements OnInit {
  currentDistributorsRegion:any;
  distributors = DISTRIBUTORSLIST;

  constructor() {
  }

  ngOnInit() {
    this.currentDistributorsRegion = 'all';
  }

  onSelectDistributorsRegion(DistributorsRegion) {
    if(DistributorsRegion === this.currentDistributorsRegion ) return;
    if(DistributorsRegion !== this.currentDistributorsRegion ){
      this.currentDistributorsRegion= DistributorsRegion;
    }
  }

}
