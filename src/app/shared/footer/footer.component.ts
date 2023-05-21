import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public fullYear: number = new Date().getFullYear();
  // public currentDate: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
