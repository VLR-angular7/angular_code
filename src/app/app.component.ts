import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directives';
  show:boolean=true;
  employees:any[]=

  [
{name:"venkat123",age:25,city:"hyd",salary:"100k",empImg:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/darbar-et00116717-07-11-2019-06-14-06.jpg"},
{name:"srinivas",age:35,city:"pune",salary:"100k"},
{name:"siva",age:36,city:"blr",salary:"900k"},
{name:"udhay",age:39,city:"mum",salary:"90k"},
{name:"sai",age:45,city:"hyd",salary:"170k"},


  ]

cricketTeams:any[]=[
{teamName:"India",players:[{name:"Kohli",role:"batsman"},{name:"Rohith",role:"batsman"},{name:"Dhawan",role:"batsman"}]},
{teamName:"Aus",players:[{name:"Warner",role:"batsman"},{name:"Rohith",role:"batsman"},{name:"Dhawan",role:"batsman"}]},
{teamName:"England",players:[{name:"Root",role:"batsman"},{name:"Rohith",role:"batsman"},{name:"Dhawan",role:"batsman"}]},
{teamName:"SA",players:[{name:"Dekock",role:"batsman"},{name:"Rohith",role:"batsman"},{name:"Dhawan",role:"batsman"}]},
{teamName:"NZ",players:[{name:"Taylor",role:"batsman"},{name:"Rohith",role:"batsman"},{name:"Dhawan",role:"batsman"}]},

]



movies=[
  "test1","test2"
]







}
