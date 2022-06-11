import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import baseUrl from './helper';

interface IToken {
  token:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = ''; 
  user: BehaviorSubject<any> = new BehaviorSubject(null);
 

  constructor(    private http:HttpClient  ) { }

  //add user
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/` , user);

  }
  //signin
  signin(user:any){
    return this.http.post(`${baseUrl}/generate-token` , user).pipe(tap((data:any)=> {this.token=(data.token)}))

  }
  //
  // getLoggedinUser(token,userId){
  //   return this.http.post(`${baseUrl}/generate-token` , user)
  // }

}
