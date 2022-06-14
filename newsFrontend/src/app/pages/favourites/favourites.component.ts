import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteNews:any;

  constructor(private newsService:NewsapiService, private userService: UserService) {
    this.userService.user.subscribe({next:value=>{
      const userName = value.username;
    
      this.newsService.getFavourite(userName).subscribe({
        next: data=>{
       
          this.favouriteNews = data;
        }
      })
    }})

   }

  ngOnInit(): void {
  }

}
