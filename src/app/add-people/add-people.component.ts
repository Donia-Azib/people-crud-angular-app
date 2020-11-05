import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  myForm : FormGroup;
  fileToUpload: File = null;

  constructor(private fb:FormBuilder,private service:UserService,
    private router:Router,private toastr: ToastrService,private httpclient:HttpClient,
    private translator:TranslateService) {
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
      phone : new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      //importFile: new FormControl('', Validators.required)
    };
    this.myForm = this.fb.group(formControls);
   }

  ngOnInit() :void{
    this.translator.use(localStorage.getItem("lang") || 'en');
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
 

  saveUser(){
    // const formdata = new FormData();
    // formdata.append('image',this.fileToUpload,this.fileToUpload.name);

    let data = this.myForm.value;
  // this.fileToUpload.name,this.fileToUpload.type,this.fileToUpload.stream)
    let user = new User(data.firstname,data.lastname,data.email,null,data.phone);
   this.service.addUser(user).subscribe(
    res=>{
      console.log(res);
      this.toastr.success('User add successfully....');
      this.router.navigate(["/people-list"]);
    },
    error=>
    {
      console.log(error);
      this.toastr.error('User add failed....');
    }
   );
    
  }

  onFileChange(event) {
    console.log(event);
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);
    
  }

  import(): void {
    const formdata = new FormData();
    formdata.append('image',this.fileToUpload,this.fileToUpload.name);


    console.log('import ' + this.fileToUpload.name);
  }

}
