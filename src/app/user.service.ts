import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  // private apiUrlGetAll="https://backend-people-crud-app.herokuapp.com/users";
  private apiUrlGetAll="http://localhost:8080/application/members";
 
 
  // private apiUrlGetOneUser="https://backend-people-crud-app.herokuapp.com/users/";
  private apiUrlGetOneUser="http://0.0.0.0:8080/application/member/";


  // private apiUrlDelete="https://backend-people-crud-app.herokuapp.com/users/"
  private apiUrlDelete="http://0.0.0.0:8080/application/member/delete/"

  // private apiUrlAdd="https://backend-people-crud-app.herokuapp.com/users/add";
  private apiUrlAdd="http://localhost:8080/application/member/add";


  // private apiUrlUpdate="https://backend-people-crud-app.herokuapp.com/users/update";
  private apiUrlUpdate="http://0.0.0.0:8080/application/member/update";

  private apiUrlRegister="https://backend-people-crud-app.herokuapp.com/users/register";
  private apiUrlLogin="https://backend-people-crud-app.herokuapp.com/users/login";

  constructor(private http:HttpClient) { }

  //get all user from api : json placeholder
 getAllUser(){
    let data = this.http.get<any>(this.apiUrlGetAll);
    return data;
 }

 getOneUser(id:any){
  return this.http.get<any>(this.apiUrlGetOneUser+id);
}

 deleteUser(id)
 {
   return this.http.delete<any>(this.apiUrlDelete+id);
 }

 addUser(user:User)
 {
  return this.http.post<any>(this.apiUrlAdd,user);
 }

 updateUser(user:User)
 {
  return this.http.put<any>(this.apiUrlUpdate,user);
 }

 registerUser(user:User)
 {
  return this.http.post<any>(this.apiUrlRegister,user);
 }

 loginUser(user:User)
 {
  return this.http.post<any>(this.apiUrlLogin,user);
 }

 UserLoggedIn()
{
  if(localStorage.getItem('Mytoken'))
    return true; 
  else
    return false;
}

}
