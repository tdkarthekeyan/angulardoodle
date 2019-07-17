import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  public displayedColumns = ['Name', 'EmailId', 'DOB', 'Gender', 'PhoneNo', 'UserId', 'Send'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, public Api: ApiService) {
  }

  ngOnInit() {
    this.getList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getList(): any {
    let user_id = this.Api.user_id;
    this.Api.
      List({ user_id })
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
  onSend(data) {
    console.log(data);
    let user_id = data.user_id;
    let req_id = this.Api.user_id;
    this.Api.
      ReqSend({ user_id, req_id })
      .subscribe((res: any) => {
        console.log(res.data);
      },
        errorResponse => {
          console.log(errorResponse.error.error);
        });
  }
}
