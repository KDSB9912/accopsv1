import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User1 } from "./User1";
import { Updatetheuser } from "./updatetheuser";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _getUrl = "http://localhost:4000/api/viewusers";
  private _remApi = "http://localhost:4000/api/removeuser";
  private _addApi = "http://localhost:4000/api/adduser";
  private _getUserUrl = "http://localhost:4000/api/updateuser/get";
  private _post = "http://localhost:4000/api/updateuser/post";

  constructor(private _http:HttpClient
  ) { }


  postUser(ans : Updatetheuser) : Observable<any>
  {
    return this._http.post(this._post , {'form' : ans});
  }

  getUsers() : Observable<User1[]>
  {
    return this._http.get<User1[]>(this._getUrl);
  }

  getUserinfo(username : string) : Observable<Updatetheuser>
  {
    const param1 = new HttpParams().set('username' , username);
    const arr =  this._http.get<Updatetheuser>(this._getUserUrl , {params : param1});
    console.log(arr);
    return arr;
  }


  removeUser(id): Observable<any> {
   return this._http.get(`${this._remApi}/delete/${id}`);
  }

  addUser(ans): Observable<any>{

    let totaldeals =0,acceptedeals=0,rejecteddeals=0,dealspending=0,maxval=1000,Hide=true,Hide1=false , username = ans.username , imge = ans.imge, company = ans.company ,address = ans.address, city = ans.city,country = ans.country,firstname = ans.firstname,lastname = ans.lastname,orgcode = ans.orgcode,postalcode = ans.postalcode , urights = ans.urights , drights = ans.drights , L1 = ans.L1 , L2 = ans.L2 , L3 = ans.L3 , regioncode = ans.regioncode , password = ans.password;

    const obj ={
       username ,imge, company ,address,city,country,firstname,lastname,orgcode,postalcode,totaldeals,acceptedeals,rejecteddeals,dealspending,maxval,Hide,Hide1 , urights , drights , L1 , L2 , L3 , regioncode , password
    };
    return this._http.post(`${this._addApi}`,obj)
  }
}
