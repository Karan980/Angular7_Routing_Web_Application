import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
repos;
  constructor(private service: DataService) { }

  ngOnInit() {
 
this.service.getRepo().subscribe(
      (data:Response)=>{
             this.repos=data;
      },
       (erro:Response) =>{
        alert('An unexpected error occured');
      }
    );
  }

}