import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  blog : FormGroup ;
  blogs: any[] = [] ;
  htmlContent = '';

  constructor() { 
    this.blog = new FormGroup({
      title : new FormControl(""),
      content: new FormControl("")
    })
  }

  addBlog() {
    this.blogs.push(this.blog.value);
    this.blog.reset();
  }

  ngOnInit(): void {
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '8rem',
    minHeight: '5rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };
}
