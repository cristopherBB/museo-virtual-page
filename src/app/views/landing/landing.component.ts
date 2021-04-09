import { Component, OnInit } from '@angular/core';
import { EXAMPLE_MUSEUM_OVERVIEWS } from 'src/app/models/museum.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  museums = EXAMPLE_MUSEUM_OVERVIEWS;
  constructor() { }

  ngOnInit(): void {
    console.log(this.museums);
  }
}
