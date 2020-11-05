import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularModalComponent } from '../angular-modal/angular-modal.component';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {


  p:number=1;

  peopleList=[
    {
      index : 1,
      firstname : 'Donia',
      lastname : 'Donia',
      phone : '123456789',
    },
    {
      index : 2,
      firstname : 'Hamdi',
      lastname : 'Hamdi',
      phone : '216565113',
    }, 
    {
      index : 3,
      firstname : 'Ayoub',
      lastname : 'Ayoub',
      phone : '16132165',
    }
  ];

  myPeopleList=[];
  firstname:any;
  private page:number =0;
  private pages:Array<number>;

  constructor(private service:UserService,private modalService: NgbModal
    ,private toastr: ToastrService,private translator:TranslateService) { }

  ngOnInit() {
    const lang = localStorage.getItem('lang') || 'en';
    this.translator.use(lang);

    this.getAllMember()
   
  }

  getAllMember()
  {
    this.service.getAll(this.page).subscribe(
      //2 fonction => result / error
      result=>{
          this.myPeopleList = result['content'];
          this.pages = new Array(result['totalPages']);
      },
      error=>{
          console.log(error); 
      }
    );
  }

  delete(people)
  {
    const index = this.myPeopleList.indexOf(people);
    if (index > -1) {
      this.myPeopleList.splice(index, 1);

    this.service.deleteUser(people.id).subscribe(
      result=>{
        this.toastr.success('User delted successfully....');
        console.log(result);
      },
      error=>{
        console.log(error);
        this.toastr.error('User delete failed....');
      }
    );
  }
  }
  open(user:User) {
    const modalRef = this.modalService.open(AngularModalComponent);
    modalRef.componentInstance.user = user;
  }


  search()
  {
    if(this.firstname == "")
      this.ngOnInit();
    else
    {
      this.myPeopleList= this.myPeopleList.filter(res=>
        {
            return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
        });
    }
  }

  key:String='id';
  reverse:boolean=false;
  sort(key)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getAllMember();
  }

}
