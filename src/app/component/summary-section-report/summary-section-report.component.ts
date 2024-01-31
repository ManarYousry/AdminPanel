import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-summary-section-report',
  templateUrl: './summary-section-report.component.html',
  styleUrls: ['./summary-section-report.component.css']
})
export class SummarySectionReportComponent implements OnInit {

  toppings=new FormControl();
  toppingList: string[] = ['Overall Transaction Performance', 'Non-Fatal error Accuracy', 'Fatal error Accuracy'];

  constructor(private title :Title) {
    this.title.setTitle("Summary Section Report")
   }
  ngOnInit(): void {
  }

}
