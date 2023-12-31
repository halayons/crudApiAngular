import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Notas } from './notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

 private apiURL="http://localhost:8060/api/notas";
 httpOptions={
   headers:new HttpHeaders({
     'content-Type':'application/json'
   })
 }

 constructor(private httpClient:HttpClient) { }
 getAll():Observable<any>{
   return this.httpClient.get(this.apiURL+'/notas')
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(notas:Notas):Observable<any>{
   return this.httpClient.post(this.apiURL+'/',JSON.stringify(notas),this.httpOptions)
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

 update(id:number,notas:Notas):Observable<any>{
   return this.httpClient.put(this.apiURL + '/notas/'+id, JSON.stringify(notas),this.httpOptions)
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
