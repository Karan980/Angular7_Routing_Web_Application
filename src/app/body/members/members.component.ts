import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private service: DataService) { }
users:any;
  ngOnInit() {
    this.service.getMembers().subscribe(
      (data)=>{
        this.users=data;
      }, 
      (erro:Response) =>{
        alert('An unexpected error occured');
      }
    )
  }
}