import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Utente } from '../utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  utente : Utente; 
 
  private baseUrl: string = 'http://127.0.0.1:8080/contatti/api'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getUtenti() : Observable<any> {
    return this._http.get(this.baseUrl + '/contatti',this.httpOptions).pipe(
    map((response =>response )));
  }
  
  getUtente(id:Number) : Observable<any> {
    return this._http.get(this.baseUrl + '/contatto/'+id,this.httpOptions).pipe(
    map((response =>response )));
  }

  saveUtente(utente:Utente) {
    return this._http.post(this.baseUrl + '/save',JSON.stringify(utente), this.httpOptions).pipe(
    catchError(this.errorHandler<any>('saveContatto')));
  }

  updateUtente(utente:Utente) {
    return this._http.put(this.baseUrl + '/update',JSON.stringify(utente),this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('updateContatto')));
  }

  deleteUtente(username:string) : Observable<any>{
    return this._http.delete(this.baseUrl + '/delete/'+username,this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('udeleteContatto')));
  }
  
  setter(utente : Utente){
    this.utente = utente;
  }

  getter(){
    return this.utente;
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
