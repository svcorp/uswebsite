import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pa-201',
  templateUrl: './pa-201.component.html',
  styleUrls: ['./pa-201.component.css']
})
export class Pa201Component implements OnInit {
  currentChannel:any;

  constructor() { }

  ngOnInit() {
    this.currentChannel = 'ch1';
  }
  setChannel(channel) {
    if(channel === this.currentChannel ) return;
    if(channel !== this.currentChannel ){
      this.currentChannel = channel;
    }
  }
}
