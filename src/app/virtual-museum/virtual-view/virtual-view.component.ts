import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-view',
  templateUrl: './virtual-view.component.html',
  styleUrls: ['./virtual-view.component.scss']
})
export class VirtualViewComponent implements OnInit {
  @Input() viewId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
