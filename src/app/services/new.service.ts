import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  status: string;
  totalResults: number;
  articles: any[];
}

@Injectable({
  providedIn: 'root'
})

export class NewService {

  constructor(private http: HttpClient) {}

  getTopRatedNews(): Observable<ApiResult>{
    return this.http.get<ApiResult>(`https://newsapi.org/v2/everything?q=keyword&sortBy=popularity/news/popular&apiKey=6bdfc2b68453477bbb15c10c58d248e5`);
  }

  findNews(search: string){
    return this.http.get<ApiResult>(`https://newsapi.org/v2/everything?q=${search}&apiKey=6bdfc2b68453477bbb15c10c58d248e5`)
  }

}
