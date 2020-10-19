import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  myForm : FormGroup;

  constructor(private fb:FormBuilder,private service:UserService,
    private router:Router) {
    let formControls =
    {
      //first param : default value to display
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
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
    };
    this.myForm = this.fb.group(formControls);
   }

  ngOnInit() :void{
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



  saveUser(){
    let data = this.myForm.value;
    let user = new User(data.firstname,data.lastname,data.email,null);
   this.service.addUser(user).subscribe(
    res=>{
      console.log(res);
      // this.toastr.success('User add successfully....', 'Toastr fun!');
      this.router.navigate(["/people-list"]);
    },
    error=>
    {
      console.log(error);
      
    }
   );
    
  }

}
