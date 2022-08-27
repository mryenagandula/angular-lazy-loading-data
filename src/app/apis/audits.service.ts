import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {

  public  baseUrl = "https://letstalk-be.herokuapp.com" || "http://localhost:3000"

  public headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });
  
  constructor(private http:HttpClient) { }

  public getAudits(pageIndex,pageSize){
    let params= new HttpParams();
    return this.http.get(`${this.baseUrl}/public/audits/${pageIndex}/${pageSize}`,{headers :this.headers,params})
  }

}
