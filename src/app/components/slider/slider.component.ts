import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {environment} from "../../../environments/environment";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BackdropSize} from "../../shared/enums/backdrop-size";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger(
      'fade',
      [state('void', style({opacity: 0})),
        transition('void => *', [animate('1s')]),
        transition('* => void', [animate('500ms')])
      ])
  ]
})
export class SliderComponent implements OnInit {

  @Input()
  public movies: Movie[] = [];
  @Input()
  public isBanner: boolean = false;
  public baseUrlImage = environment.BASE_IMAGES_URL_ORIGINAL;
  public defaultImageSize = BackdropSize.ORIGINAL;
  public currentSlideIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.onSlide();
  }

  onSlide() {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.movies.length;
      }, 4000);
    }
  }

}
