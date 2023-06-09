import { Injectable, ViewChild } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor() {}

  checkUser(userName:string, passw:string) {
    if(userName == "irakli" && passw == "1234") {
      sessionStorage.setItem("UserInfo", "Admin");
      return true;
    } else {
      return false
    }
  }
  

  
@ViewChild('user') user: any
@ViewChild('pass') pass: any


}
