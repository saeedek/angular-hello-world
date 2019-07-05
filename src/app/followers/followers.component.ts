import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers : any[];
  constructor(private followerService : FollowerService) { }

  ngOnInit() {
    this.followerService.getAll().subscribe(
      response=>{
        this.followers = response;
        console.log(this.followers)
      },
      error=>{
        console.log("An unexpected error occured")
      }
    )
  }

}
