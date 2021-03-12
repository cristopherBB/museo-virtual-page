import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-virtual-view',
  templateUrl: './virtual-view.component.html',
  styleUrls: ['./virtual-view.component.scss']
})
export class VirtualViewComponent implements OnInit {
  @Input() viewId: string;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  getMuseumUrl(): SafeHtml {
    const url = `https://alvdeveloper.com/pannellum?scene=${this.viewId}`;
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
