import { Component, OnInit } from '@angular/core';
import { IFavouriteNews, NewsapiService } from 'src/app/services/newsapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  user:any;

  constructor(private userService:UserService,private api:NewsapiService) {
    this.userService.user.subscribe({next:(data)=>{this.user=data;console.log(data)}})
   }

   //display TechNews data 
   public TechNewsData:any=[];

  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.TechNewsData=result.articles;
    })
    
  }
  addFavourite(news: any){
    const data: IFavouriteNews = {
      userId: this.user.username,
      title:news.title,
      description:news.description,
      content:news.content,
      url:news.url,
      urlToImage:news.urlToImage,
      publishedAt:news.publishedAt, 
      sourceWebsiteName:news.source.name
    }

    console.log(data)

    this.api.addFavourites(data).subscribe({next:value=>{
      alert("added to favourite")
    }})
  }

}
