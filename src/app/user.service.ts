import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlGetAll="https://backend-people-crud-app.herokuapp.com/users";
  private apiUrlGetOneUser="https://backend-people-crud-app.herokuapp.com/users/";
  private apiUrlDelete="https://backend-people-crud-app.herokuapp.com/users/"
  private apiUrlAdd="https://backend-people-crud-app.herokuapp.com/users/add";
  private apiUrlUpdate="https://backend-people-crud-app.herokuapp.com/users/update";
  private apiUrlRegister="https://backend-people-crud-app.herokuapp.com/users/register";
  private apiUrlLogin="https://backend-people-crud-app.herokuapp.com/users/login";

  constructor(private http:HttpClient) { }

  //get all user from api : json placeholder
 getAllUser(){
    let data = this.http.get<any>(this.apiUrlGetAll);
    return data;
 }

 getOneUser(id:String){
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
