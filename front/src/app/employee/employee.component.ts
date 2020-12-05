import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

})
export class EmployeeComponent implements OnInit {

  constructor(private service: SharedService ) { }

  FirstName: string;
  LastName: string;
  Email: string ;
  DOB: string ;
  Salary: number;


  EmployeeList: any=[];
  EmployeeListWithoutFilter: any=[];
  EmployeeIdFilter: string = '';
  EmployeeNameFilter: string = '';

  ngOnInit(): void {
    this.refreshEmpList();
  }


  deleteClick(data){
    if(confirm('Are you Sure?')){

      this.service.deleteEmployee(data).subscribe(d => {

        console.log(d);
        this.refreshEmpList();

      })
    }

  }


updateId: any;
updateClick(data){
  this.updateId = data;
}
  updateClickSave(){
    var val = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      DOB: this.DOB,
      Salary: this.Salary

    };

    this.service.updateEmployee(this.updateId, val).subscribe(k => {
      console.log(k);
      alert('Updated Succesfully');
     this.refreshEmpList();
    });

  }

  refreshEmpList(){
    this.service.getDepEmployees().subscribe(emp => {

      this.EmployeeList = [];
      this.EmployeeListWithoutFilter = [];

      for(var i=0; i< Object.keys(emp).length; i++){
        let temp: any[] = [];
          temp.push(emp[i].EmployeeID)
          temp.push(emp[i].FirstName)
          temp.push(emp[i].LastName)
          temp.push(emp[i].Email)


          let birthDay = (emp[i].DOB)
          let timeDiff = Math.abs(Date.now() - Date.parse(birthDay))
          let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

          console.log(age)
          temp.push(age)

         this.EmployeeList.push(temp);
         this.EmployeeListWithoutFilter.push(temp);

      }

      console.log( this.EmployeeList);
      console.log(emp)
      console.log(this.EmployeeList.length)

    });
  }


  FilterFn(){
    this.EmployeeList = this.EmployeeListWithoutFilter.filter(i =>{
      return i[0].toString().toLowerCase().includes(
        this.EmployeeIdFilter.toString().trim().toLowerCase()

      )&&
      i[1].toString().toLowerCase().includes(
        this.EmployeeNameFilter.toString().trim().toLowerCase()
      )
    });
  }


  sortResult(){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
  }

}
