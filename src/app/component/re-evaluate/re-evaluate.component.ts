import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-re-evaluate',
  templateUrl: './re-evaluate.component.html',
  styleUrls: ['./re-evaluate.component.css']
})
export class ReEvaluateComponent implements OnInit {

  constructor(private title : Title) {
    this.title.setTitle("Quality Management | ReEvaluate")
   }

  ngOnInit(): void {
  }

}
