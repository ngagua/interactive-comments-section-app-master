import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentsshellComponent } from './components/comments-shell/comments-shell.component';
import { RepliesComponent } from './components/replies/replies.component';
import { NewRepliesComponent } from './components/new-replies/new-replies.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { NewCommentComponent } from './new-comment/new-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsshellComponent,
    RepliesComponent,
    NewRepliesComponent,
    CommentComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
