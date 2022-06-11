import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user={
    username: '',
    password: '',
  
  };

  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username == null){
      //alert('User is required');
      this.snack.open("Username is required",'',{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      })
      return;
    }

    //addUser: userservice

    this.userService.signin(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done!!', 'User is signed in','success')
      },
      (error)=>{
        console.log(error);
        // alert('something went wrong');
        this.snack.open('Something went wrong','',{
          duration:3000,
        })
      }
      
    )
  }

}

