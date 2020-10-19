import { logging } from 'protractor';
import { UserService } from './../user.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm : FormGroup;
  
  constructor(private fb:FormBuilder,private service:UserService,
    private router:Router) {
    let formControls =
    {
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
    };
    this.myForm = this.fb.group(formControls);
   } 

    //get Functions
  get password()
  {
    return this.myForm.get('password');
  }
  
  get email()
  {
    return this.myForm.get('email');
  }

  login(){
    let data = this.myForm.value;
    let user = new User(null,null,data.email,data.password);
    console.log(user);
    this.service.loginUser(user).subscribe(
      res=>{
        
        console.log(res);
        let token = res.token;
        localStorage.setItem('Mytoken',token);
        this.router.navigate(['/people-list']);
        
      },
      error=>
      {
        console.log(error);
        
      }
    );
    
  }

  ngOnInit() {
    if(this.service.UserLoggedIn())
      this.router.navigate(['/people-list']);
  }

}
