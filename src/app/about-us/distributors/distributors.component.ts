import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {
  country: string;
  company: string;
  name: string;
  phone: number;
  email: string;


  
  constructor() { }

  ngOnInit() {
  }

}
