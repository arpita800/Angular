import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor( private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:3000/fruits');
  }

  create(data: any) {

    return this.httpClient.post('http://localhost:3000/fruits', data);
  }

  edit(id: number){
    return this.httpClient.get(`http://localhost:3000/fruits/${id}`);
  }

  update(data: any){
    return this.httpClient.put(`http://localhost:3000/fruits/${data.id}` , data);
  }

  delete(id: number){
    return this.httpClient.delete(`http://localhost:3000/fruits/${id}`);
  }

}
