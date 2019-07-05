import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers : any[];
  constructor(private followerService : FollowerService,private route : ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined=>{
      let id = combined[0].get('id')
      let page = combined[1].get('page')

      this.followerService.getAll()
    })
    
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
