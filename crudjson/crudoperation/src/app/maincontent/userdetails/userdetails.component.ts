import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {
public getUserListData:any;
reverse: boolean = false;
sortedCollection: any[];
  
  constructor(private _http:Http, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.getUserListData, 'Username');
   }

   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  order: string;

  getUserList = function(){
    let url ="http://localhost:3000/userlist";
    this._http.get(url)
    .subscribe(
      (res:Response)=> {
this.getUserListData = res.json();

      }
    );
  }

  

  ngOnInit() {
    this.getUserList();
  }

}
