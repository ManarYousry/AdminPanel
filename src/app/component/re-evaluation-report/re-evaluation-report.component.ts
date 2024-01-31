import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';


export interface PeriodicElement {
  Date: string;
  CustomerName:string;
  UserName:string;
  UniqueId: string;
  Serial: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'},
  { Date: 'oooo', CustomerName: 'Hydrogen',UserName:"user",UniqueId: "12134",  Serial: 'H'}
];

@Component({
  selector: 'app-re-evaluation-report',
  templateUrl: './re-evaluation-report.component.html',
  styleUrls: ['./re-evaluation-report.component.css']
})
export class ReEvaluationReportComponent implements OnInit {

  
  searchKey:string ='' ;
  constructor(private title:Title){
    //  this.searchKey='';
    
    this.title.setTitle("Quality Management :: ReEvaluation report")
    
  }
 
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['Date','CustomerName', 'UserName', 'UniqueId','Serial','Action'];
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
    

    
    

}
