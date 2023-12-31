import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //private apiURL="https://jsonplaceholder.typicode.com";
  private apiURL="http://localhost:8080/api/alumnos";
  httpOptions={
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<any>{
   // return this.httpClient.get(this.apiURL + '/posts/')
    return this.httpClient.get(this.apiURL+'/alumnos')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(post:Post):Observable<any>{
    return this.httpClient.post(this.apiURL+'/',JSON.stringify(post),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    console.log(id);
    return this.httpClient.get(this.apiURL + '/'+id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number,post:Post):Observable<any>{
    return this.httpClient.put(this.apiURL + '/alumnos/'+id, JSON.stringify(post),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;
    }else{
      errorMessage='Error Code: ${error.status}\nMessage:${error.message}';
    }
    return throwError(errorMessage);
  }
}

