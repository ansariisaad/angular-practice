import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj : any = {
    "EmailId": ""
    ,"Password": ""
  };

  route = inject(Router)
  http = inject(HttpClient)

  loginBtn(){
    console.log(this.loginObj)
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login success")
        ;this.route.navigateByUrl('dashboard')
        ;localStorage.setItem("angular token" , res.data.token)
      }else{
        alert(res.message);
      }
    })
  }
}
