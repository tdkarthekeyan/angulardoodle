import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoggedIn: boolean;
  userName: string;
  emailId: string;
  user_id: number;
  // public base = 'https://voxit.herokuapp.com/';
  public base = 'http://localhost:84/';
  public auth = 'auth/';
  public baseAndAuth = this.base + this.auth;

  private login: string;
  private register: string;
  private reqList: string;
  private sendreq: string;
  private updatereq: string;
  private list: string;
  constructor(public http: HttpClient) {
    this.login = this.baseAndAuth + 'login';
    this.register = this.baseAndAuth + 'register';
    this.reqList = this.baseAndAuth + 'listfrnds_req';
    this.sendreq = this.baseAndAuth + 'sendfrndreq';
    this.updatereq = this.baseAndAuth + 'updatefrndreq';
    this.list = this.baseAndAuth + 'list';
  }
  public Login<T>(itemName: T): Observable<T> {
    const toAdd = JSON.stringify({ ItemName: itemName });
    return this.http.post<T>(this.login, itemName);
  }
  public ReqList(itemName: any): Observable<any> {
    const toAdd = JSON.stringify({ ItemName: itemName });
    return this.http.post<any>(this.reqList, itemName);
  }
  public ReqSend(itemName: any): Observable<any> {
    const toAdd = JSON.stringify({ ItemName: itemName });
    return this.http.post<any>(this.sendreq, itemName);
  }
  public ReqUpdate(itemName: any): Observable<any> {
    const toAdd = JSON.stringify({ ItemName: itemName });
    return this.http.post<any>(this.updatereq, itemName);
  }
  public addUser(itemName: any): Observable<any> {
    const toAdd = JSON.stringify({ ItemName: itemName });
    return this.http.post<any>(this.register, itemName);
  }
  public List(itemName: any): Observable<any> {
    const toAdd = JSON.stringify({ ItemName: itemName });
    return this.http.post<any>(this.list, itemName);
  }
  setEmailId(emailId: string): void {
    this.emailId = emailId;
  }

  getEmailId(): string {
    return this.emailId;
  }
  setUserId(user_id: number): void {
    this.user_id = user_id;
    console.log(this.user_id);
  }
  getUserId(): number {
    return this.user_id;
  }
  setUserName(name: string): void {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userName = null;
    this.emailId = null;
    this.user_id = null;
  }
}
