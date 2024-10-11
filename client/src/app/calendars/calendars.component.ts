import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css']
})
export class CalendarsComponent implements OnInit {

  showForm = false //this is to render the form if user likes to add new calendar

  constructor() { }

  ngOnInit(): void {
  }

}
