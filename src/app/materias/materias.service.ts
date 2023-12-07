import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Carreras } from '../carreras/carreras';
import { Materias } from './materias';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private apiURL="http://localhost:8050/api/materias";
  httpOptions={
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<any>{
   // return this.httpClient.get(this.apiURL + '/posts/')
    return this.httpClient.get(this.apiURL+'/materias')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(materias:Materias):Observable<any>{
    return this.httpClient.post(this.apiURL+'/',JSON.stringify(materias),this.httpOptions)
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

  update(id:number,materias:Materias):Observable<any>{
    return this.httpClient.put(this.apiURL + '/materias/'+id, JSON.stringify(materias),this.httpOptions)
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
