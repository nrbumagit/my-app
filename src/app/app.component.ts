import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
 // news = {articles:[]};
  //mArticles:Array<any>;
  articles : any;
  sources : any;
  filterSource='google-news';

  constructor(private newsService :NewsService){}

  ngOnInit(){
   // this.newsService.getNews().subscribe(response => this.mArticles = response['articles']);
   this.newsService.getTopHeadLInes().subscribe(response => {
     console.log('Original response ',response);
     this.articles = response;
    // this.news=this.articles['articles'];
     console.log('articles -total articals',this.articles['articles']);
     console.log('articles -author',this.articles['articles'][0].author);
     console.log('articles - id ',this.articles['articles'][0].source.id);
     console.log('articles - name',this.articles['articles'][0].source.name);
    // console.log('news ',this.news.articles);
   });

   this.newsService.getSources().subscribe(response =>{
          this.sources=response;
          console.log('this.sources[sources][0].id ',this.sources['sources'][0].id);
          console.log('this.sources[sources][0].name ',this.sources['sources'][0].name);
   });
    
   //this.newsService.getNews().subscribe(response => console.log('response---',response));
  }

  filterNews(source:string) {
    this.newsService.getNewsBySource(source)
    .subscribe(
      response => {
        this.articles = response;
      console.log(' articcles by source ',this.articles);
      });
  }
  
}
