import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}



@Component({
  selector: 'app-besoin-daide',
  templateUrl: './besoin-daide.component.html',
  styleUrls: ['./besoin-daide.component.css']
})
export class BesoinDaideComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];


  constructor(
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
