import { NgModule } from '@angular/core';

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
  ],
  providers: [],
  bootstrap: []
})
export class RmMaterialsModule { }
