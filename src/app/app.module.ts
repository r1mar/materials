import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ImgViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
