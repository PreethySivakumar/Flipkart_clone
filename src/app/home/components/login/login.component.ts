import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isVisible:boolean = false;
  username:string ='';
  password:string = '';
  loginError:boolean = false;

  @Output() loginSuccess = new EventEmitter<string>(); 

  constructor() { }

  private credentials = [
    {username:'preethy',password:'preethy1'},
    {username:'meenu',password:'meenu1'},
    {username:'siva',password:'siva1'},
    {username:'padma',password:'padma1'},

  ]

  ngOnInit(): void {
  }

  show(){
    console.log("show");
    this.isVisible = true;
  }

  hide(){
    console.log("hide");
    this.isVisible = false;
  }
  hideLoginForm(): void {
    this.isVisible = false;
  }

  onSubmit(){
    const isValid =  this.credentials.some(
      credDetails => credDetails.username === this.username && 
      credDetails.password === this.password
    );

    if(this.username && this.password){
      this.loginSuccess.emit(this.username);
    }

    if(isValid){
      this.loginError = false;
      console.log("if in login");
      this.hide();
     
    }else{
      console.log("else in login");
      this.loginError = true;
      this.username = '';
      this.password = '';
    }
  }


}
