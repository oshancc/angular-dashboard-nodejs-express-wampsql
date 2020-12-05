import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private service: SharedService) { }
  EmployeeList1: any=[];

  name1: any = '';
  date1: any = '';
  name2: any = '';
  date2: any = '';
  name3: any = '';
  date3: any = '';



  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getDepEmployees().subscribe(emp => {

      for(var i=0; i< Object.keys(emp).length; i++){
          let temp: any[] = [];

          temp.push(emp[i].FirstName)


          let birthDay = (emp[i].DOB)

  var dateObj = new Date();
         // var nd = new Date().toLocaleDateString()
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = year + "-" + month + "-" + day;
var a = Date.parse(newdate)

var monthNext = new Date(birthDay).getUTCMonth() + 1; //months from 1-12
var dayNext = new Date(birthDay).getUTCDate()+1;
var yearNext =new Date(birthDay).getUTCFullYear();

var newdateTemp = year + "-" + monthNext + "-" + dayNext;
var b = Date.parse(newdateTemp)

var Next = ''

if(a >= b){
 Next = (year+1) + "-" + monthNext + "-" + dayNext
}else
{
  Next = year + "-" + monthNext + "-" + dayNext
}

temp.push(Next)


         this.EmployeeList1.push(temp);
      }

      //console.log(this.EmployeeList1);


      this.EmployeeList1.sort(sortFunction);

      function sortFunction(a, b) {
          if (Date.parse(a[1]) === Date.parse(b[1])) {
              return 0;
          }
          else {
              return (Date.parse(a[1]) < Date.parse(b[1])) ? -1 : 1;
          }
      }

      console.log(this.EmployeeList1);

      this.name1 = this.EmployeeList1[0][0];
      this.date1 = this.EmployeeList1[0][1];
      this.name2 = this.EmployeeList1[1][0];
      this.date2 = this.EmployeeList1[1][1];
      this.name3 = this.EmployeeList1[2][0];
      this.date3 = this.EmployeeList1[2][1];
    });
  }


}
