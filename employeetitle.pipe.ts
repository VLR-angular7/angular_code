import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
name:"employeePipe"
})



export class EmployeeTitlePipe implements PipeTransform{
    transform(name:string,gender:string,city:string):string{
        // console.log(city)
        if(gender.toLowerCase()=="male"){
            return "Mr."+ name;
        }
        else{
            return "Miss."+ name;
        }
    }

}