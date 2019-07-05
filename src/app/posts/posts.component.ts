import { Component , OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      response =>{
        console.log(response);
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
    },(error: AppError) =>{
      if(error instanceof BadInputError){
        alert("bad input error")
      }else{
        throw error;
      }
      
    })
  }
  updatePost(post){
    // this.client.put(this.url,
    //   JSON.stringify(post)
    //   )
    
      this.postService.updatePost(post)
        .subscribe(
          response=>{
            console.log(response);
          }
        )
  }
  deletePost(post){
    this.postService.deletePost(3000).subscribe(response=>{
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error: AppError)=>{
      if(error instanceof NotFoundError){
        alert("this post has been already deleted");
      }
      else{
        throw error
      }
      
    })
  }

}
