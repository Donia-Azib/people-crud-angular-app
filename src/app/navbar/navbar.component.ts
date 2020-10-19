import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageURL="assets/images/logo.png";
  isLogged:Boolean;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    if(this.service.UserLoggedIn())
      this.isLogged=true;
    else
      this.isLogged=false;
  }


  logout(){
    localStorage.removeItem('Mytoken');
    this.router.navigate(['/login']);
  }

  

}
