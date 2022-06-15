import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFavouriteNews, NewsapiService } from 'src/app/services/newsapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  category:any;

  constructor(private userService:UserService,private api:NewsapiService, private routeSanapShot: ActivatedRoute) {
    
    this.userService.user.subscribe({next:(data)=>{
      this.user=data
      this.routeSanapShot.params.subscribe(data=>{
        console.log(data)
        this.category = data["category"]
        this.api.tcHeadlines(data["category"]).subscribe((result)=>{
          console.log(result.articles);
          this.topHeadlinesData=result.articles;
          
        })
      })
    
    }})
   }

   //display headlines data
   public topHeadlinesData:any=[];
   
  ngOnInit(): void {
   
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
  deleteFavourite(news:any){
    
  }
}
