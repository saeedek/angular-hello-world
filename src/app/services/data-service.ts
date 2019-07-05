import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private client : HttpClient,private url:string) { }

  getAll(){
    return this.client.get(this.url).pipe(
      catchError(this.handleError)
    )
  }
  create(resource){
    let fakeObject={
      "email":"me@example.com"
    }
    return this.client.post("https://reqres.in/api/register",
      JSON.stringify(fakeObject)
    ).pipe( 
      catchError(this.handleError)
    );
  }
  delete(idToDelete){
    return this.client.get("https://reqres.in/api/users/23").pipe( 
      catchError(this.handleError)
    );
  }
  update(resource){
    return this.client.patch(this.url+'/'+resource.id,JSON.stringify({
      isRead:true
    })).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(err: Response){
    if(err.status === 404){
      return throwError(new NotFoundError(err))
    }
    if(err.status === 400){
      return throwError(new BadInputError(err))
    }
    return throwError(new AppError(err))
  }
}
