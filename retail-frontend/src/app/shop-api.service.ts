import { Injectable } from '@angular/core';
import { Shop } from './shop';
import {PageResponse} from './PageResponse';
import { Observable, of } from 'rxjs';
import { HttpClient ,HttpParams,HttpResponse} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShopService {


  private url = 'http://localhost:8080/retail/shops';
  private loginUrl = 'http://localhost:8080/retail/auth/login';
  private createShopUrl ="http://localhost:8080/retail/shop"
  private urlPage = 'http://localhost:8080/retail/shops/get?page=';


  constructor(private http : HttpClient) { }


  
 login(loginPayload) {
  const payload = new HttpParams()
  .set('username', loginPayload.username)
  .set('password', loginPayload.password);
  return  this.http.post<boolean>(this.loginUrl,payload)
  .pipe(catchError(this.handleError('authentication',[])));
 }

 
 getShop(): Observable<Shop[]>{
    return this.http.get<Shop[]>(this.url)
     .pipe(
          catchError(this.handleError('getShop', []))
     );
 }
 createShop(shopJsonstring): Observable<HttpResponse<any>[]>{
  return this.http.post<HttpResponse<any>[]>(this.createShopUrl,shopJsonstring)
   .pipe(
        catchError(this.handleError('createShop', []))
   );
}


 

getPageResponse(page:number): Observable<PageResponse>{
 var url = this.urlPage;
 url=url+page + "&size=4";
 return this.http.get<PageResponse>(url)
 .pipe(
   map(response => {
     const data = response;
     console.log(data.content);
     return data ;
   }));
}

 
 private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
    console.error(error); 
    console.log(`${operation} failed: ${error.message}`);
     return of(result as T);
   };
 }
}
