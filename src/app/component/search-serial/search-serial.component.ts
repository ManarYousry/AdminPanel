import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-serial',
  templateUrl: './search-serial.component.html',
  styleUrls: ['./search-serial.component.css']
})
export class SearchSerialComponent implements OnInit {

  constructor( private title : Title) {
    this.title.setTitle("Quality Management | Search serial")
   }

  ngOnInit(): void {
  }

}
