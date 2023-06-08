import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // filter employee name value based on user input provided in search field
    if (args[0] === undefined) {
      return value;
    }
    let filterValue:string[] = [];
    value.filter((emp: any) => {
      if (emp.empName.toLowerCase().includes(args[0].toLowerCase()) || emp.emailId.toLowerCase().includes(args[0].toLowerCase()) || emp.empId.toString().includes(parseInt(args[0]).toString())) {
        filterValue.push(emp);
      }
    });
    return filterValue;
  }

}
