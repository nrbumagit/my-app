import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Articles } from './articles';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  temp:Articles = new Articles;
  newsArticles : Articles[] = [];

  private headLInesUrl = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=be16e1226aca4877a3d631608666b828';

  private newsBySourceurl = 'https://newsapi.org/v2/top-headlines?sources=';
  constructor(private http:HttpClient) { }

  getTopHeadLInes(){
    return this.http.get(this.headLInesUrl);
  }

  getNewsBySource(source:string){
    return this.http.get(this.newsBySourceurl+source+'&apiKey=be16e1226aca4877a3d631608666b828');
  }

  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey=be16e1226aca4877a3d631608666b828');
  }

 /* public customMapper(item) : Articles{
    this.temp = new Articles;
    this.temp.author=item["author"];
    this.temp.content=item["content"];
    return this.temp;
  }
*/
}
