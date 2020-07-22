import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

interface Employee {
  FullName: string;
  email: string;
  gender: string;
  phoneNumber: number,
  contact: any,
  isActive: boolean,
  department: number,
  dob: any,
  photopath: string
}

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  departments: any = [];
  empModel: Employee = {
    FullName: '',
    email: '',
    gender: '',
    phoneNumber: null,
    contact: '',
    isActive: null,
    department: 2,
    dob: null,
    photopath: ''
  };
  previewDetails: boolean = false
  constructor() { 
    this.departments = [
      { id: 1, name: 'Help Desk'},
      { id: 2, name: 'HR'},
      { id: 3, name: 'IT'},
      { id: 4, name: 'Payroll'},
      { id: 5, name: 'Admin'},

    ]
  }

  ngOnInit(): void {
  }

  togglePhotopath() {
    this.previewDetails = !this.previewDetails;
  }

  onSubmitEmployeeForm(formData: NgForm) {
    console.log(formData);
    console.log(this.empModel);
  }

}
