import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {
  image1 : string = "assets/img/images1.png";
  image2 : string = "assets/img/images2.png";
  image3 : string = "assets/img/images3.png";

  constructor() { }

  ngOnInit(): void {
  }

}
