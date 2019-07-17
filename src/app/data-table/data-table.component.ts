import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['Name', 'EmailId', 'DOB', 'Gender', 'PhoneNo', 'UserId', 'Accept', 'Reject'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, public Api: ApiService) {
  }

  ngOnInit() {
    this.getReqList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getReqList(): any {
    let status = 'Request';
    let user_id = this.Api.user_id;
    this.Api.
      ReqList({ user_id, status })
      .subscribe((res: any) => {
        console.log(res.data);
        this.dataSource.data = res.data as User[];
      },
        errorResponse => {
          console.log(errorResponse.error.error);
        });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  onDataAccept(data) {
    console.log(data);
    let status = 'Accept';
    let req_id = data.user_id;
    let user_id = this.Api.user_id;
    this.Api.
      ReqUpdate({ user_id, status, req_id })
      .subscribe((res: any) => {
        console.log(res.data);
      },
        errorResponse => {
          console.log(errorResponse.error.error);
        });
  }
  onDataReject(data) {
    console.log(data);
    let status = 'Reject';
    let req_id = data.user_id;
    let user_id = this.Api.user_id;
    this.Api.
      ReqUpdate({ user_id, status, req_id })
      .subscribe((res: any) => {
        console.log(res.data);
      },
        errorResponse => {
          console.log(errorResponse.error.error);
        });
  }
}