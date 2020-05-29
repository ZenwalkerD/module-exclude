import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tens-home',
  templateUrl: './tens-home.component.html',
  styleUrls: ['./tens-home.component.css']
})
export class TensHomeComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  click() {
    this.router.navigate(['./feature'], { relativeTo: this.activatedRoute });
  }

}
