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
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private client : HttpClient) { }

  getPosts(){
    return this.client.get(this.url).pipe(
      catchError(this.handleError)
    )
  }
  createPost(newPost){
    let fakeObject={
      "email":"me@example.com"
    }
    return this.client.post("https://reqres.in/api/register",
      JSON.stringify(fakeObject)
    ).pipe( 
      catchError(this.handleError)
    );
  }
  deletePost(idToDelete){
    return this.client.get("https://reqres.in/api/users/23").pipe( 
      catchError(this.handleError)
    );
  }
  updatePost(post){
    return this.client.patch(this.url+'/'+post.id,JSON.stringify({
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
