import { Component, OnInit } from '@angular/core';

//-----------------------------------------------------------------------
import { ApiService } from 'src/app/services/api.service';
//-----------------------------------------------------------------------


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  //constructor() { }

  //------------------------------------------------------
  constructor(
    private api: ApiService,
  ) { }
  //------------------------------------------------------

  ngOnInit(): void {
  }

  //------------------------------------------------------
  userRole = this.api.userRole;
  //------------------------------------------------------
}
