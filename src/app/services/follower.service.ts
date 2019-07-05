import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends DataService {
 
  


  constructor(client: HttpClient) {
    super(client,"https://api.github.com/users/mosh-hamedani/followers")
  }
}
