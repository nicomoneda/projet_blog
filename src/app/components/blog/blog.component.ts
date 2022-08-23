import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import Blog from 'src/app/models/blog.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog!: Blog  ;

  
  //getBlogById à partir de blogs
  

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.blogService.getBlogById(id as unknown as number).subscribe((Blog) => {
      this.blog = Blog ;
    })
  }

}
