import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  persons = [
    {
      name: 'Vasya',
      age: 23,
      phone: '0545556677'
    },
    {
      name: 'Petya',
      age: 25,
      phone: '0523344567'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
