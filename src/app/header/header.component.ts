import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  openNav() {
  document.getElementById("dropdownMenuLink").style.height = "100%";

  }

  closeNav() {
  document.getElementById("dropdownMenuLink").style.height = "0%";
  }

}
