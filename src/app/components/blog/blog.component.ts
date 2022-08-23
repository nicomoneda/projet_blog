import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import Blog from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Blog[] = [] ;

  //getBlogById à partir de blogs


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogById(0).subscribe((Blog) => {
      this.blog = Blog ;
    })
  }

}
