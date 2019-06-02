import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
@Input() id;
@Output() delete=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
Localdeletefunction(id){
  this.delete.emit(id);
}
}