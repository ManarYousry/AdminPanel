import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { DeleteService } from 'src/app/shared/service/delete.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ServiceService } from './service.service';


// export interface PeriodicElement {
//   CallDate: string;
//   CustName:string;
//   User:string;
//   Serial: string;
//   MonitorName:string;
//   Status:string;
// }

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

//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
//   { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'}
// ];
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  list:Array<PeriodicElement>=[]
  searchKey:string ='' ;
  constructor(private title:Title,private dialogService: DeleteService,private service:ServiceService, public notificationService: NotificationService ){

    this.title.setTitle("Quality Management :: Result")

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

//next previous page
// pageIn = 0;
// public pIn: number = 0;
// pagesizedef: number = 100;
// previousSizedef: number = 100;
// pageChanged(event: any) {
//   //this.loading = true;
//   this.pIn = event.pageIndex;
//   this.pageIn = event.pageIndex;
//   this.pagesizedef = event.pageSize;
//   let pageIndex = event.pageIndex;
//   let pageSize = event.pageSize;
//   let previousSize = pageSize * pageIndex;
//   this.previousSizedef = previousSize;
//   this.getRequestdataNext(previousSize, pageSize, pageIndex + 1)

// }
// getRequestdataNext(previousSize: number, pageSize: number, pageNum: number) {
//   this.service.getLists().subscribe(res => {

//       this.list.length = previousSize;
//       this.list=res.slice(pageNum,pageSize)
//      // this.list.push(...res.);
//       this.list.length = res.length;
//       this.dataSource = new MatTableDataSource<any>(this.list);
//       this.dataSource._updateChangeSubscription();
//       this.dataSource.paginator = this.paginator as MatPaginator;

//   }, (error) => {
//    console.log(error.error.message)
//   })
// }

    onDelete(){
     // this.dialogService.openConfirmDialog();
     this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      if (res) {
        // this.service.deleteDailyOperation(r.id).subscribe(
        //   rs => {
           this.notificationService.success(':: successfully Deleted');
        //     this.getRequestdata(1, 25, '', this.sortColumnDef, this.SortDirDef);
        //   },
        //   error => { this.notificationService.warn(':: An Error Occured') }
        // );
      }
    });
}

}
