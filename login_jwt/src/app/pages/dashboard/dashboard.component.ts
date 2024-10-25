import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userList : any[] = [] ;

  http = inject(HttpClient)
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any)=>{
      this.userList = res.data;
    })
  }
}
