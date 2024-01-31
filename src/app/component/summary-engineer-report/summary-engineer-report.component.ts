import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-summary-engineer-report',
  templateUrl: './summary-engineer-report.component.html',
  styleUrls: ['./summary-engineer-report.component.css']
})
export class SummaryEngineerReportComponent implements OnInit {

  toppings=new FormControl();  toppingList: string[] = ['Overall Transaction Performance', 'Non-Fatal error Accuracy', 'Fatal error Accuracy'];

  constructor(private title :Title) {
    this.title.setTitle("Summary Engineer Report")
   }

  ngOnInit(): void {
  }


}
