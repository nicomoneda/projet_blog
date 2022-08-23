import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Comment from '../models/comment.model'; 

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:3000' ;


  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.apiUrl}/comments`);
  }
}
