import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input()
  public videoSite: string = 'Youtube';
  @Input()
  public videoTitle: string | null = null;
  @Input()
  public videoKey: string | null = null;

  public videoUrl: SafeResourceUrl = '';

  constructor(private _domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.onGetTypeVideo();
  }

  onGetSafeUrl(url: string) {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onGetTypeVideo() {
    switch (this.videoSite) {
      case 'YouTube':
        this.videoUrl = this.onGetSafeUrl('https://www.youtube.com/embed/' + this.videoKey);
        break;
      case  'Vemeo':
        this.videoUrl = this.onGetSafeUrl('https://player.vimeo.com/video/' + this.videoKey);
        break;
      default:
        this.videoUrl = this.onGetSafeUrl('https://www.youtube.com/embed/' + this.videoKey);
    }
  }

}
