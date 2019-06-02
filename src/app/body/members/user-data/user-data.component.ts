import { Component, OnInit,Input } from '@angular/core';
import {DataService} from '../../../data.service'
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
@Input() url;
userData:any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUserDetails(this.url).subscribe(
      (data)=>{
        
        this.userData=data;
      }, (erro:Response) =>{
        alert('An unexpected error occured');
      }
    
    )


  }

}