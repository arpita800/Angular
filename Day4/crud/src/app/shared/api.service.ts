import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res : any) => {
      return res;
    
  }))

}
}
