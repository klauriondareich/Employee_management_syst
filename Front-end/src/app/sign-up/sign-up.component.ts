import { Component, OnInit } from '@angular/core';
import {UserSignupService} from '../user-signup.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  passwordErrorMsg = false;

  constructor( private userSignUp:UserSignupService) { 

    // this has to be removed
    this.userSignUp.getData().subscribe(data => {
      console.log(data)
    })

  }

  ngOnInit(): void {
  }

  /* This func retrieves data from the sign up form */
  /* Checks if all conditions match then call the api func */

  onSubmit(signUpForm:any){
    let data = signUpForm.value;
    console.log("data", data);
    if (!signUpForm.invalid){
      if (data.password === data.confirm_password){
        // call the api and pass data
        this.userSignUp.saveEmployeeInfo(data).subscribe((result) => {
          console.log("result", result)
        });
        this.passwordErrorMsg = false
      }
      else this.passwordErrorMsg = true
    }
  }
}
