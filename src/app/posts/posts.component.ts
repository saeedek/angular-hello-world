import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      response =>{
        this.posts = response;
      }
    )
  }
  posts : any[]
  
  constructor(private postService : PostService){
    
  }
  createPost(input: HTMLInputElement){
    let newPost={
      title: input.value
    }
    input.value = ""
    this.postService.createPost(newPost).subscribe(response =>{
      newPost['id'] = response['id'];
      this.posts.splice(0,0,newPost);
      console.log(newPost)
    })
  }
  updatePost(post){
    // this.client.put(this.url,
    //   JSON.stringify(post)
    //   )
    
      this.postService.updatePost(post).subscribe(response=>{
        console.log(response);
      })
  }
  deletePost(post){
    this.postService.deletePost(post.id).subscribe(response=>{
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }

}
