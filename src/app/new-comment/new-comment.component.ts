import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User } from 'src/app/model/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Output() onComment: EventEmitter<string> = new EventEmitter<string>();


  content: string = '';
  currentUser!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getusers().then(
      data => this.currentUser = data.currentUser);
  }

  addComment() {
    if (!this.content) {
      return;
    }
    this.onComment.emit(this.content);
    this.content = '';
  }

}
