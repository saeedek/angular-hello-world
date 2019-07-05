import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.snapshot.paramMap;//this is the snapshot of the route params
    this.route.paramMap
    .subscribe(params=>{
      let id = +params.get('id')
      console.log(id);
    })
  }

}
