import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ServiceService } from './service.service';


export interface PeriodicElement {
  id?: number
  name?: string
  gender?: string
  age?: number
  address?: Address
}

export interface Address {
  state?: string
  city?: string
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  list:Array<PeriodicElement>=[]
  searchKey:string ='' ;
  constructor(private title:Title,private service:ServiceService ){

    this.title.setTitle(" Result")

  }

  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['id','name', 'gender', 'age', 'address'];
  dataSource = new MatTableDataSource();

  ngOnInit(){
   this.getRequestData();
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



    getRequestData(){

      this.service.getLists().subscribe(

        (res)=>{

          this.list=res
          this.list.length= res.length;
          this.dataSource = new MatTableDataSource<any>(this.list);
          this.dataSource.paginator = this.paginator as MatPaginator;
          this.dataSource.sort = this.sort as MatSort;

      },
      (error)=>{
            console.log(error.error.message)
      })
    }



}
