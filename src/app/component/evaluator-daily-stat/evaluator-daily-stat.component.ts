import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { AddnewEngineerComponent } from 'src/app/Forms/addnew-engineer/addnew-engineer.component';

@Component({
  selector: 'app-evaluator-daily-stat',
  templateUrl: './evaluator-daily-stat.component.html',
  styleUrls: ['./evaluator-daily-stat.component.css']
})
export class EvaluatorDailyStatComponent implements OnInit {

  
  constructor(private _bottomSheet: MatBottomSheet, private title :Title) { 
    this.title.setTitle("Quality Management | Evaluator Daily Stat.")
  }

  ngOnInit(): void {
  }
  onCreate(){
    //this.service.initializeFormGroup();
    const dialogGonfig = new MatDialogConfig();
    dialogGonfig.disableClose=true;
    dialogGonfig.autoFocus= true;
    dialogGonfig.width="50%";
    dialogGonfig.panelClass='modals-dialog';
  
    this._bottomSheet.open(AddnewEngineerComponent);
  
  }


}
