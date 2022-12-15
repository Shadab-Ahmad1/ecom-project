import { Component, OnInit } from '@angular/core';
import {SellerService} from '../services/seller.service';
import {Router} from '@angular/router'
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private route:Router) { }
  showLogin=false;
  authError:string='';
 
  signUp(data:SignUp){
    this.seller.userSignUp(data);
    console.log("data from service");
  }
  Login(data:SignUp):void{
    this.authError='';
    // console.warn("login api",data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError=" Email or Password is InValid"
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
  ngOnInit():void{
    this.seller.reloadseller();
  }

}
