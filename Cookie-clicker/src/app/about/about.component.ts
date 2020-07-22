import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  public name: string = "Ginger Cookie cliker game";
  public description: string = "Ginger cookie game is funny and interesting...Are you hungry now ?";
  public version: string = "GingerCookie 0.0.1";

  constructor() { }

  ngOnInit() {
  }

}
