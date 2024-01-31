import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-summary-shift-report',
  templateUrl: './summary-shift-report.component.html',
  styleUrls: ['./summary-shift-report.component.css']
})
export class SummaryShiftReportComponent implements OnInit {

  toppings=new FormControl();  toppingList: string[] = ['Overall Transaction Performance', 'Non-Fatal error Accuracy', 'Fatal error Accuracy'];

  constructor(private title :Title) {
    this.title.setTitle("Summary Shift Report")
   }

  ngOnInit(): void {
  }


}
