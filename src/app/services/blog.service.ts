import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Blog from '../models/blog.model'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:3000' ;

  constructor( private httpClient: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(`${this.apiUrl}/blogs`);
  }

  getBlogById(id: number) {

    return this.httpClient.get<Blog>(`${this.apiUrl}/blogs/${id}`);
  }

}
