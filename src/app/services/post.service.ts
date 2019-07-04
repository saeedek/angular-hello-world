import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private client : HttpClient) { }

  getPosts(){
    return this.client.get(this.url)
  }
  createPost(newPost){
    return this.client.post(this.url,
      JSON.stringify(newPost)
    )
  }
  deletePost(idToDelete){
    return this.client.delete(this.url+'/'+idToDelete);
  }
  updatePost(post){
    return this.client.patch(this.url+'/'+post.id,JSON.stringify({
      isRead:true
    }))
  }
}
