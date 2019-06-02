import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
private issues:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getEvents().subscribe(
      (data:Response)=>{
             this.issues=data;
      }, 
      (erro:Response) =>{
        alert('An unexpected error occured');
      }
    );
  }
removeItem(id){
   this.issues = this.issues.filter(function (issue, index, arr) {
      return issue.id != id;
    });
}
}