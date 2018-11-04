import { Component, OnInit } from '@angular/core';
import { DISTRIBUTORSLIST } from './distributors-list.component';
import { COUNTRIESLIST } from './countries-list.component';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})

export class DistributorsComponent implements OnInit {
  currentDistributorsRegion:any;
  currentCountry:any;
  distributors = DISTRIBUTORSLIST;
  countries = COUNTRIESLIST;
  show:boolean;

  constructor() {
  }

  ngOnInit() {
    this.currentDistributorsRegion = 'all';
    this.currentCountry ='';
    this.show = true;
  }

  onSelectDistributorsRegion(DistributorsRegion) {
    if(DistributorsRegion === this.currentDistributorsRegion ) return;
    if(DistributorsRegion !== this.currentDistributorsRegion ){
      this.currentDistributorsRegion= DistributorsRegion;
    }
  };

  onSelectCountry(country) {
    if(country === this.currentCountry ) return;
    if(country !== this.currentCountry ){
      this.currentCountry = country;
    }
  }

  onClickCountry(country){
    this.onSelectCountry(country);
    this.toggleCountriesContainer();
  }

  onClickContainer(DistributorsRegion){
    this.onSelectDistributorsRegion(DistributorsRegion);
    this.toggleContinentContainer();
  }

  toggleCountriesContainer(){
    this.show = !this.show;
  }

  toggleContinentContainer(){
    if(this.show == false){
      this.show = true;
    }
  }

}
