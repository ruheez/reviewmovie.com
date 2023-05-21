import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {

  @Input()
  public movieTypes: Movie[] = [];
  @Input()
  public sectionTitle: String = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
