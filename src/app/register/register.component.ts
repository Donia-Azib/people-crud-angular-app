import { UserService } from './../user.service';
import { User } from './../user';
import { FormGroup ,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm : FormGroup;
  
  constructor(private fb:FormBuilder,private service:UserService,
    private router:Router) {
    let formControls =
    {
      firstname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(3)
      ]),
      lastname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(3)
      ]),
      phone : new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]), 
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      cnf_password : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
    };
    this.myForm = this.fb.group(formControls);
   } 

    //get Functions
  get firstname()
  {
    return this.myForm.get('firstname');
  }
  get lastname()
  {
    return this.myForm.get('lastname');
  }
  get email()
  {
    return this.myForm.get('email');
  }
  get phone()
  {
    return this.myForm.get('phone');
  }
  get password()
  {
    return this.myForm.get('password');
  }
  get cnf_password()
  {
    return this.myForm.get('cnf_password');
  }

  Register(){
    let data = this.myForm.value;
    let user = new User(data.firstname,data.lastname,
      data.email,data.password,null,data.phone);
    console.log(user);
    this.service.registerUser(user).subscribe(
      res=>{
        this.router.navigate(['/login']);
      },
      error=>
      {
        console.log(error);
        
      }
    );
    
  }

  ngOnInit():void {
    if(this.service.UserLoggedIn())
      this.router.navigate(['/people-list']);
  }

}
