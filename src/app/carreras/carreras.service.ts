import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Carreras } from './carreras';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  //private apiURL="https://jsonplaceholder.typicode.com";
  private apiURL="http://localhost:8070/api/carreras";
  httpOptions={
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<any>{
   // return this.httpClient.get(this.apiURL + '/posts/')
    return this.httpClient.get(this.apiURL+'/carreras')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(carreras:Carreras):Observable<any>{
    return this.httpClient.post(this.apiURL+'/',JSON.stringify(carreras),this.httpOptions)
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

  update(id:number,carreras:Carreras):Observable<any>{
    return this.httpClient.put(this.apiURL + '/carreras/'+id, JSON.stringify(carreras),this.httpOptions)
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
