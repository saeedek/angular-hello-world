import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : any[]
  constructor(client : HttpClient){
    client.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((response:any[])=>{
      this.posts = response;
    })
  }

}
