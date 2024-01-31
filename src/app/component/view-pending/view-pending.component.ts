import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-pending',
  templateUrl: './view-pending.component.html',
  styleUrls: ['./view-pending.component.css']
})
export class ViewPendingComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle("Quality Management | view pending")
  }

  ngOnInit(): void {
  }

}
