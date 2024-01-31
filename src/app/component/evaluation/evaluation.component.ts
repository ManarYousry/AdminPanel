import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor(private title : Title) { 
    this.title.setTitle("Quality Management :: Evaluate")
  }

  ngOnInit(): void {
  }

}
