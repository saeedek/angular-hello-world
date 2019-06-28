import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isLiked') isLiked : boolean;
  @Input('likeCount') likeCount : number;
  @Output('likeCountChange') likeCountChange = new EventEmitter();

  onClick(){
    this.likeCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}
export interface LikeChangedEventArgs{
  newValue: boolean
}
