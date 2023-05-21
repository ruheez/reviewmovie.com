import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SliderComponent} from './components/slider/slider.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ItemsBannerComponent} from './components/items-banner/items-banner.component';
import {ItemComponent} from './components/item/item.component';
import {PaginatorModule} from "primeng/paginator";
import {MovieDetailsComponent} from './pages/movie-details/movie-details.component';
import {TabViewModule} from "primeng/tabview";
import {ImageModule} from "primeng/image";
import {VideoEmbedComponent} from './components/video-embed/video-embed.component';
import {CarouselModule} from "primeng/carousel";
import {GenresComponent} from './pages/genres/genres.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {HttpErrorInterceptor} from "./shared/interceptors/http-error.interceptor";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieDetailsComponent,
    VideoEmbedComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    InputTextModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
