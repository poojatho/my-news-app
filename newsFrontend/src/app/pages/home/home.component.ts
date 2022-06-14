import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;

  constructor(private userService:UserService,private api:NewsapiService) {
    this.userService.user.subscribe({next:(data)=>{this.user=data;console.log(data)}})
   }

   //display headlines data
   public topHeadlinesData:any=[];
   
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData=result.articles;
      
    })
  }

}
