import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee.interface';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: './../../assets/images/crib-1.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: './../../assets/images/crib-4.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: './../../assets/images/default-crib.jpg'
    },
  ];


  constructor() { }

  ngOnInit(): void {
    const cameras = [
      { name: 'Candid 1', isactive: true},
      { name: 'Candid 4', isactive: false},
      { name: 'Candid 2', isactive: false},
      { name: 'Candid 3', isactive: true},
      { name: 'Candid 5', isactive: true},
    ]
    let fil = cameras.map((camera) => {
      return camera.name = "Hey "+ camera.name;
    })
    console.log('find ', fil);

    // Arrow function with this keyword context


    const cam = {
      price: 600,
      age: 20,
      name: 'John',
      isActive: true
    }

    let marry = {
      price: 600,
      age: 23,
      name: 'Marry',
      isActive: true
    }
    let Sam = {
      price: 600,
      age: 29,
      name: 'Sam',
      isActive: true
    }

    let user = new Map();
    user.set('sam', Sam);
    user.set('marry', marry);
    user.set('cam', cam);
    console.log(user);

    for (const [key, value] of user.entries()) {
        console.log(key, value);
        for (const iterator in value) {
            console.log(iterator)
        }
    }










  }

}
