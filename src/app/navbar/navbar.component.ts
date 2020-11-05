import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageURL="assets/images/club_logo.png";
  isLogged:Boolean;
  lang;

  supportLanguages=['en','fr','es'];
  constructor(private service:UserService,private router:Router,private translatorService:TranslateService) 
  {
    this.translatorService.addLangs(this.supportLanguages);
    this.translatorService.setDefaultLang('en');
  }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    if(this.service.UserLoggedIn())
      this.isLogged=true;
    else
      this.isLogged=false;
  }


  logout(){
    localStorage.removeItem('Mytoken');
    this.router.navigate(['/login']);
  }

  
  changeLang(lang)
  {
    console.log(lang);
    localStorage.setItem('lang',lang);
    window.location.reload(); 
    
  }
}
