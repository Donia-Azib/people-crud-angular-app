import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.css']
})
export class UpdatePeopleComponent implements OnInit {
  myForm : FormGroup;
  
  constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private service:UserService,private router:Router,private toastr: ToastrService) {
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
  

  ngOnInit():void {

    let idUser = this.route.snapshot.params.id;
    console.log(idUser);
    this.service.getOneUser(idUser).subscribe(
        res=>{
          let user = res;
          this.myForm.patchValue({
            firstname : user.firstname,
            lastname : user.lastname,
            email : user.email,
            phone : user.phone
          });
        },
        error=>
        {
          console.log(error);
          
        }
    );
    
  }


  updateUser(){
    console.log(this.myForm.value);
    let data = this.myForm.value;
    let idUser = this.route.snapshot.params.id;
    let user = new User(data.firstname,data.lastname,data.email,null,idUser,data.phone);
    this.service.updateUser(user).subscribe(
      res=>{
        this.toastr.success('User updated successfully....');
        this.router.navigate(['/people-list']);
      },
      error=>
      {
        console.log(error);
        this.toastr.error('User update failed....');
      }
    );
    
  }

}
