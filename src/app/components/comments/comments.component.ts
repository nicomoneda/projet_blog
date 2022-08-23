import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import Comment from 'src/app/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentList: Comment[] = [] ;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((Comment) => {
      this.commentList = Comment ;
    })
  }

}
