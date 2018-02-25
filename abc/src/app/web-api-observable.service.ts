import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WebApiObservableService {
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAddPost(url: string, postBody:any): Observable<any> {
    // getAddPost(url: string): Observable<any> {
    return this.http
        .post(url, postBody, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getComments(url: string): Observable<any> {
    return this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }
    
    getAllPhotos(url: string): Observable<any> {
         
    return this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }
    getAllAlbums(url: string): Observable<any> {
         
    return this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getAllPosts(url: string): Observable<any> {
         
    return this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getAllTasks(url: string): Observable<any> {
         
    return this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }


    getAllUsers(url: string): Observable<any> {
         
    return this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    // getspecificuser(url: string): Observable<any> {
    //      
    // return this.http
    //     .get(url, this.options)
    //     .map(this.extractData)
    //     .catch(this.handleError);
    // }




    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}