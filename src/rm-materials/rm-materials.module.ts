import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ImgViewerComponent
  ],
  exports: [
    CarouselComponent,
    ImgViewerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class RmMaterialsModule { }
