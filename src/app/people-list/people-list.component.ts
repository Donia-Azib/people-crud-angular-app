import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

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
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getAllUser().subscribe(
      //2 fonction => result / error
      result=>{
          this.myPeopleList = result;
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

    this.service.deleteUser(people._id).subscribe(
      result=>{
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    );
  }
  }

}
