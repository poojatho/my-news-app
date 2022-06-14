import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
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

}
