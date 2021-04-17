import { Component, OnInit } from '@angular/core';
import { MuseumOverview } from 'src/app/models/museum.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  museums: MuseumOverview[];

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.getMuseums().subscribe((response) => {
      this.museums = [...response.result];
    }, console.error);
  }
}
