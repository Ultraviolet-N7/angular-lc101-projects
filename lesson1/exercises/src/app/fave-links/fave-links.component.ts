import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
  links = ["https://www.w3schools.com/", "https://www.politico.com/"];
  constructor() { }

  ngOnInit() {
  }

}
