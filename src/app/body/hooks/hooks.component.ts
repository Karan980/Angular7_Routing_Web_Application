import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {
error:boolean=false;
  constructor(private service: DataService) { }
hooks:any;
  ngOnInit() {
    
    this.service.getHooks().subscribe(
      (data)=>{
        this.hooks=data;
      }
      ,(err)=>{
        this.error=true;
      }
    )

  }

}