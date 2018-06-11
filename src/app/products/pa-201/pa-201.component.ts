import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pa-201',
  templateUrl: './pa-201.component.html',
  styleUrls: ['./pa-201.component.css']
})
export class Pa201Component implements OnInit {
  currentChannel:any;
  showStyle: false;
  showStyle2: false;
  showStyle3: false;

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
  // getStyle(){
  //   if(this.currentChannel == 'ch1'){
  //     return "skyblue";}
  //   if(this.currentChannel !== 'ch1'){
  //     return "";
  //   }
  // }


}
