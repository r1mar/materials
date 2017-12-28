import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RmComponent } from './rm.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';

@NgModule({
  declarations: [
    RmComponent,
    CarouselComponent,
    ImgViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RmComponent]
})
export class RmModule { }
