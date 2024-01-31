import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-summary-team-report',
  templateUrl: './summary-team-report.component.html',
  styleUrls: ['./summary-team-report.component.css']
})
export class SummaryTeamReportComponent implements OnInit {

  toppings=new FormControl();
  toppingList: string[] = ['Overall Transaction Performance', 'Non-Fatal error Accuracy', 'Fatal error Accuracy'];

  constructor(private title :Title) {
    this.title.setTitle("Summary Team Report")
   }
  ngOnInit(): void {
  }

}
