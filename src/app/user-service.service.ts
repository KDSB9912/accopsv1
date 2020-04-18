import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User1 } from "./User1";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _getUrl = "/api/viewusers";
  constructor(private _http:HttpClient
  ) { }


  getUsers() : Observable<User1[]>
  {
    return this._http.get<User1[]>(this._getUrl);
  }
}
