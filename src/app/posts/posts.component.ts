import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : any[]
  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private client : HttpClient){
    client.get(this.url)
    .subscribe((response:any[])=>{
      this.posts = response;
    })
  }
  createPost(input: HTMLInputElement){
    let newPost={
      title: input.value
    }
    input.value = ""
    this.client.post(this.url,
      JSON.stringify(newPost)
    ).subscribe(response =>{
      newPost['id'] = response['id'];
      this.posts.splice(0,0,newPost);
      console.log(newPost)
    })
  }

}
