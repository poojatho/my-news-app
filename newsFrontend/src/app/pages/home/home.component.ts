import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;

  constructor(private userService:UserService) {
    this.userService.user.subscribe({next:(data)=>{this.user=data;console.log(data)}})
   }

  ngOnInit(): void {
  }

}
