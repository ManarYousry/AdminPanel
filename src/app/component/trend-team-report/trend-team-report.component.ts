import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trend-team-report',
  templateUrl: './trend-team-report.component.html',
  styleUrls: ['./trend-team-report.component.css']
})
export class TrendTeamReportComponent implements OnInit {

  toppings=new FormControl();
  criterias=new FormControl();
  criteriasList: string[] = ['Opening', 'Customer Data and Verification', 'Knowledge and troubleshooting Accuracy','LISTENING SKILLS','Speaking skills','Exhibts Responsiveness toward the customer','Closing','NOC OLA','Information logging','Customer Data and Verification(onsite)','logging information','Knowledge and troubleshooting Accuracy(onsite)','Opening(Mail)'];
  toppingList: string[] = ['Accuarcy Trend', 'Main Fatal and NonFatal Criteria', 'Summary Benchmark'];

  constructor(private title :Title) {
    this.title.setTitle("Trend Team Report")
   }


  ngOnInit(): void {
  }

}
