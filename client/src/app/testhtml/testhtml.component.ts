import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-testhtml',
  templateUrl: './testhtml.component.html',
  styleUrls: ['./testhtml.component.css']
})
export class TesthtmlComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }

}
