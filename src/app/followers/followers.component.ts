import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers:any;
  constructor(private followerService: FollowerService, private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        let id = combined[0].get('id')
        let page = combined[1].get('page')

        return this.followerService.getAll()
      })
    ).subscribe(followers=>{
      this.followers = followers;
    })
  }

}
