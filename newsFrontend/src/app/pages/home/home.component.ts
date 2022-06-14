import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from 'src/app/services/user.service';
import{ BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;

  // @ViewChild(MatSidenav) 
  // sidenav!: MatSidenav;

  constructor(private userService:UserService, private observer: BreakpointObserver) {
    this.userService.user.subscribe({next:(data)=>{this.user=data;console.log(data)}})
   }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
  //     if(res.matches){
  //       this.sidenav.mode='over';
  //       this.sidenav.close();
  //     }else{
  //       this.sidenav.mode ='side';
  //       this.sidenav.open();
  //     }
  //   });
  //  }

}
