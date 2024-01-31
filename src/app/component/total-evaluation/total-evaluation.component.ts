import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { AddnewEngineerComponent } from 'src/app/Forms/addnew-engineer/addnew-engineer.component';

@Component({
  selector: 'app-total-evaluation',
  templateUrl: './total-evaluation.component.html',
  styleUrls: ['./total-evaluation.component.css']
})
export class TotalEvaluationComponent implements OnInit {

  
 
  constructor(private _bottomSheet: MatBottomSheet, private title :Title) { 
    this.title.setTitle("Quality Management | Total Evaluator")
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
