import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public data: AuthService) {}
  

  ngOnInit(): void {
    this.init()
  }


  loginForm!: FormGroup

  init() {
    this.loginForm = new FormGroup({
      user: new FormControl ('', Validators.required),
      pass: new FormControl ('', Validators.required),
    })
  }

  

  user: boolean = true;
  pass: boolean = true;

  msg:any;
  

  onSubmit(user: string, pass: string): void {
    var output = this.data.checkUser(user, pass)
    if(output) {
      this.router.navigate(['home'])
 
    } else {
      this.msg = "You entered wrong Username of Password!"
      this.router.navigate([''])
    }
    
}
}
