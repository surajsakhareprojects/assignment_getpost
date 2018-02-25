import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { WebApiObservableService } from './web-api-observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  resultobj : any;
getCommentsData : {};
getAlbumsData : {};
getPhotosData : {};
getPhotsData : {};
getPostsData:{};
getUsersData:{};
getTasksData:{};
getAddPostData:{};
  commentsCount: number;
  photosCount: number;
  albumsCount: number;
  postsCount: number;
  usersCount: number;

postBody : any ={userId: '', id: '',title: "", body: ""};


constructor(private _WebApiObservableService: WebApiObservableService) {}

onSubmit(user){
  //To fetch all the Comments
  debugger; 

  if(user['userid'] == '' || user['userTitle'] == '' ||  user['userBody'] == ''){
    alert("Please fill all fields");
  }else{
  this.postBody = {userId: user['userid'], title: user['userTitle'], body: user['userBody']};
  this._WebApiObservableService
      .getAddPost('https://jsonplaceholder.typicode.com/posts',JSON.stringify(this.postBody))
      .subscribe(
        (result:any) => {
          this.getAddPostData = result;
            if(this.getAddPostData['id'] == 101){
            alert("Post Added sucessfully");
          }else{
            alert("Post Not Added");
          }
        });  
      } // else close
} // onSubmit close
ngOnInit() {

  //To fetch all the Comments
  this._WebApiObservableService
      .getComments('https://jsonplaceholder.typicode.com/comments')
      .subscribe(
        (result:any) => {
          this.getCommentsData = result;
        this.commentsCount = result.length;});


      //To fetch all the photos
      this._WebApiObservableService
      .getAllPhotos('https://jsonplaceholder.typicode.com/albums')
      .subscribe(
        (result:any) => {
          this.getPhotosData = result;
          this.photosCount = result.length;});

      //To fetch all the albums
      this._WebApiObservableService
      .getAllAlbums('https://jsonplaceholder.typicode.com/albums')
      .subscribe(
        (result:any) => {
          this.getAlbumsData = result;
          this.albumsCount = result.length;
          });

      //To fetch all the posts
      this._WebApiObservableService
      .getAllPosts('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (result:any) => {
          this.getPostsData = result;
          this.postsCount = result.length;});

      //To fetch the list of tasks
      this._WebApiObservableService
      .getAllTasks('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (result:any) => {this.getTasksData = result;});

      //To fetch the list of users
      this._WebApiObservableService
      .getAllUsers('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (result:any) => {this.getUsersData = result;});
} //ngOnInit close

} // App Component close