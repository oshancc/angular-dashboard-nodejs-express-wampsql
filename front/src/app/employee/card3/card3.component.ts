import { logging } from 'protractor';
import { EmpModel } from './emp';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  /*FirstName: string;
  LastName: string;
  Email: string ;
  DOB: string ;
  Salary: number;
*/

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  EmpModel = new EmpModel('', '', '', '', NaN);

  onSubmit(){
    /*var val = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      DOB: this.DOB,
      Salary: this.Salary

    };*/

    this.service.addEmployees(this.EmpModel).subscribe(res => {
      console.log(res)
      alert("Data added Sccesfully")



    });
  }




}
