import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User, ScoresEvent } from '../../model/model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comments;
  @Input() reply!: Comments;
  @Input() currentUser!: User;
  @Output() onScore: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onScoreReply: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();


  isReply: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  toggleReply() {
    this.isReply = !this.isReply;
  }

  changeScore(type: string) {
    this.onScore.emit({
      id: this.comment?.id ? this.comment.id : 0,
      type: type,
    })
  }


  onReplyhandler(content: string) {
    const newReply: Comments = {
      content: content,
      createdAt: JSON.stringify(new Date(Date.now())),
      score: 0,
      user: this.currentUser,
      replyingTo: this.comment.user.username,
      replies: []
    }

    this.comment.replies.push(newReply);
    this.toggleReply();
  }

  onScoreReplyHandler({ id, type }: ScoresEvent) {
    this.onScoreReply.emit({
      id: id,
      type: type,
    })
  }

}
