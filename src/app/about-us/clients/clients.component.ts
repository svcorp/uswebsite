import { Component, OnInit } from '@angular/core';
import { CLIENTSLIST } from './clients-list.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients = CLIENTSLIST;

  constructor() { }

  ngOnInit() {
  }

}
