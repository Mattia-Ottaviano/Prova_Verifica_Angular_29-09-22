import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent implements OnInit {
  nameFourth: string;
  constructor() {
    this.nameFourth = 'quarto';
   }
    
  ngOnInit(): void {
  }

}