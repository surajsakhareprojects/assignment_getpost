import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  constructor(private _http:Http) { }
newUserData: {};
resUserData: any;
  addNewUser = function (userdata) {
    
if((userdata.firstname == '') || (userdata.lastname == '') || (userdata.username == '') || (userdata.City == '') || (userdata.Department == '')){
alert("Empty filed not allowed");
}else{
    this.newUserData = {
       "FirstName": userdata.firstname,
       "LastName": userdata.lastname,
       "Username": userdata.username,
       "City": userdata.city,
       "Department":userdata.Department
    }
    debugger;
    let url ="http://localhost:3000/userlist";
this._http.post(url, this.newUserData)
.subscribe(
  (res:Response)=>{
   this.resUserData = res.json();
   if(res['status'] == 201){
     alert("User "+ this.resUserData['FirstName']+ " added sucessfully");
   }else{}
  },
  (err)=>{ alert ("Error");}
);

} //else close

  } //adduser fun close
    
  
  ngOnInit() {
  }

}
