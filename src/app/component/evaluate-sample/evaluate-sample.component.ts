import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { UpdateSampleComponent } from 'src/app/Forms/update-sample/update-sample.component';
import { NotificationService } from 'src/app/shared/service/notification.service';



export interface PeriodicElement {
  SampleDate: string;
 Section:string;
  SampleSize: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"},
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"},
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"},
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"},
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"},
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"},
  {SampleDate: "odkod", Section: 'Hydrogen', SampleSize: "1.0079"}
 
];

@Component({
  selector: 'app-evaluate-sample',
  templateUrl: './evaluate-sample.component.html',
  styleUrls: ['./evaluate-sample.component.css']
})
export class EvaluateSampleComponent implements OnInit {

  searchKey:string ='' ;
  constructor(private dialog: MatDialog,private titleService:Title, public notificationService: NotificationService, private _bottomSheet: MatBottomSheet ){
    //  this.searchKey='';
    this.titleService.setTitle("Quality Management :: Evaluate Sample"); 
    
  }
 
  
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['SampleDate','Section', 'SampleSize', 'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // searchKey!:string;

  ngOnInit(){
   
  }

  ngAfterViewInit() { 
  
    this.dataSource.sort = this.sort as MatSort;
    this.dataSource.paginator = this.paginator as MatPaginator;}

    onSearchClear(){
      this.searchKey ='';
      this.applyFilter();
    }
    applyFilter(){
      this.dataSource.filter=this.searchKey.trim().toLowerCase();
    }
    onCreate(){
      //this.service.initializeFormGroup();
      const dialogGonfig = new MatDialogConfig();
      dialogGonfig.disableClose=true;
      dialogGonfig.autoFocus= true;
      dialogGonfig.width="50%";
      dialogGonfig.panelClass='modals-dialog';
    
      this._bottomSheet.open(UpdateSampleComponent);
    
    }


}
