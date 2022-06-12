import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  user: any;

  constructor(private userService:UserService, private router: Router) {

    this.userService.user.subscribe({next: data=> {
      this.user = data
    }})
   }

  ngOnInit(): void {
  }

  logout(){
    const loggedout = this.userService.logout();
    if(loggedout) {
      this.router.navigateByUrl("/login")
    }
  }

}
