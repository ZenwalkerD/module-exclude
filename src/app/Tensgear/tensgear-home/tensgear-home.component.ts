import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tensgear-home',
  templateUrl: './tensgear-home.component.html',
  styleUrls: ['./tensgear-home.component.css']
})
export class TensgearHomeComponent implements OnInit {

  constructor() { }
  text = environment.buildText;
  ngOnInit() {
  }

}
