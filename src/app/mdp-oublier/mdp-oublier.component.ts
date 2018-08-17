import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mdp-oublier',
  templateUrl: './mdp-oublier.component.html',
  styleUrls: ['./mdp-oublier.component.css']
})
export class MdpOublierComponent implements OnInit {

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
