import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {  
  constructor(client : HttpClient) {
    super(client,"https://jsonplaceholder.typicode.com/posts");
   }
}
