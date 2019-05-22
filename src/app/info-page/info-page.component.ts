import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  name: string = 'Name';
  age: string = 'age';
  phone: string = 'phone';
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.age = this.route.snapshot.params['age'];
    this.phone = this.route.snapshot.params['phone'];

    this.route.params.subscribe((value:Params)=>{
      this.name = value['name'];
      this.age = value['age'];
      this.phone = value['phone'];
    });
  }

}
