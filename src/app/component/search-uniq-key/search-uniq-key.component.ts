import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-uniq-key',
  templateUrl: './search-uniq-key.component.html',
  styleUrls: ['./search-uniq-key.component.css']
})
export class SearchUniqKeyComponent implements OnInit {

  constructor(private title : Title) { 
    this.title.setTitle("Quality Management | Search uniq Key")
  }

  ngOnInit(): void {
  }

}
