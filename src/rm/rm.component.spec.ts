import { TestBed, async } from '@angular/core/testing';

import { RmComponent } from './rm.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RmComponent,
        CarouselComponent,
        ImgViewerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RmComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(RmComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
