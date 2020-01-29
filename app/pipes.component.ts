import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  title="Welcome to VLR"

  months:any[]=["JAN","FEB","MARCH","APR","MAY","JUN"];

  employee={
    name:"sri",
    age:23
  }

  numberValue=126;

  today=new Date();

}
