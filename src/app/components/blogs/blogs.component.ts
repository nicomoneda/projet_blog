import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import Blog from 'src/app/models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogList: Blog[] = [] ;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((Blog) => {
      this.blogList = Blog ;
    })
  }

}
