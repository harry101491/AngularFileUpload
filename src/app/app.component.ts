import { Component, OnInit, AfterViewInit } from '@angular/core';

import { UserService, User } from "./user.service";

import { Observable } from "rxjs/Observable";
import { MatPaginator, MatSort, PageEvent } from "@angular/material";

import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import "rxjs/add/observable/of";
import "rxjs/add/observable/combineLatest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "email", "phone", "company"];
  dataSource = new UserDataSource(this._userService);
  constructor(private _userService: UserService) {
    this.dataSource.getUserFromAPI();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}

export class UserDataSource extends DataSource<User> {

  userSubject = new BehaviorSubject<User[]>([]);
  pageChangeSubject = new BehaviorSubject<PageEvent>({ pageIndex: 0, pageSize: 5, length: 0 });

  constructor(private _userService: UserService) {
    super();
  }
  
  connect(): Observable<User[]> {
    // return this.userSubject.asObservable();
    return Observable.combineLatest(this.userSubject, this.pageChangeSubject).map((result) => {
      return this.getPageData(result[0], result[1]);
    });
  }
  
  disconnect() {

  }

  getUserFromAPI() {
    this._userService.getUsers().subscribe((data) => {
      this.userSubject.next(data);
    });
  }

  private getPageData(users: User[], pageEvent: PageEvent): User[] {
    const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    console.log("Inside the getPageData"+ startIndex);
    return users.slice().splice(startIndex, pageEvent.pageSize);
  }
}

