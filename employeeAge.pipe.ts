import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
name:"employeeAgePipe"
})



export class EmployeeAgePipe implements PipeTransform{
    transform(age:string):number{
    let currentYear= new Date().getFullYear();
    let employeeDob= new Date(age).getFullYear();

    let empAge=currentYear-employeeDob;

    console.log(empAge)
    return empAge;
    // console.log("employee dob"+employeeDob)


        
    }

}