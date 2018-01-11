import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('RmCarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.images = [{
      src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
      alt: 'Pastel portrait'
    }];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('with exactly one image as object', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
      component.images = {
        src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
        alt: 'Pastel portrait'
      };
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has src attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').src).toEqual('http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg');
    });

    it('should has alt attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
    });

    it('should has navigation links hidden', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden-xs-up');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden-xs-up');
    });

    it('should throwing error by navigation', () => {
      expect(function() {
        component.next();
      }).toThrowError('there is only one image');
    });
  });

  describe('with exactly one image as array', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
      component.images = [{
        src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
        alt: 'Pastel portrait'
      }];
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has src attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').src).toEqual('http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg');
    });

    it('should has alt attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
    });

    it('should has navigation links hidden', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden-xs-up');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden-xs-up');
    });
  });

  describe('with three images', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
      component.images = [{
        src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
        alt: 'Pastel portrait'
      }, {
        src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait3.jpg',
        alt: 'Bleistiftporträt'
      }, {
        src : 'http://tm-portraits.de/Content/images/examples/Buntstiftportrait1.jpg',
        alt : 'Buntstiftporträt'
      }];
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has src attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').src).toEqual('http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg');
    });

    it('should has alt attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
    });

    it('should prev link hidden and next link visible', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden-xs-up');
      expect(compiled.querySelector('a.next').getAttribute('class')).not.toContain('hidden-xs-up');
    });

    describe('go to middle', () => {
      beforeEach(() => {
        component.next();
        fixture.detectChanges();
      });

      it('should has src attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').src).toEqual('http://tm-portraits.de/Content/images/examples/Pastelportrait3.jpg');
      });

      it('should has alt attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').alt).toEqual('Bleistiftporträt');
      });

      it('should prev link visible and next link visible', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.prev').getAttribute('class')).not.toContain('hidden-xs-up');
        expect(compiled.querySelector('a.next').getAttribute('class')).not.toContain('hidden-xs-up');
      });
    });

    describe('go to end', () => {
      beforeEach(() => {
        component.next();
        component.next();
        fixture.detectChanges();
      });

      it('should has src attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').src).toEqual('http://tm-portraits.de/Content/images/examples/Buntstiftportrait1.jpg');
      });

      it('should has alt attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').alt).toEqual('Buntstiftporträt');
      });

      it('should prev link visible and next link hidden', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.prev').getAttribute('class')).not.toContain('hidden-xs-up');
        expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden-xs-up');
      });
    });

    describe('go to over the end', () => {
      beforeEach(() => {
        component.next();
        component.next();
        fixture.detectChanges();
      });

      it('should throwing exception', () => {
        expect(function() {
          component.next();
        }).toThrowError('Last image reached');
      });

    });

    describe('go to over the begin', () => {
      beforeEach(() => {
        fixture.detectChanges();
      });

      it('should throwing exception', () => {
        expect(function() {
          component.prev();
        }).toThrowError('First image reached');
      });

    });

    describe('go back to begin', () => {

      beforeEach(() => {
        component.next();
        component.next();
        component.prev();
        component.prev();
        fixture.detectChanges();
      });

      it('should has src attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').src).toEqual('http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg');
      });

      it('should has alt attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
      });

      it('should prev link hidden and next link visible', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden-xs-up');
        expect(compiled.querySelector('a.next').getAttribute('class')).not.toContain('hidden-xs-up');
      });

    });

  });

  describe('with empty images array', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
      component.images = [];
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has no img', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img')).toBeFalsy();
    });

    it('should shows no image picture', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('i.fa-camera')).toBeTruthy();
    });

    it('should has navigation links hidden', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden-xs-up');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden-xs-up');
    });

    it('should throw an erro by navigation', () => {
      expect(function() {
        component.next();
      }).toThrowError('there is no images for navigation');
    });
  });

  describe('with images as undefined', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has no img', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img')).toBeFalsy();
    });

    it('should shows no image picture', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('i.fa-camera')).toBeTruthy();
    });

    it('should has navigation links hidden', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden-xs-up');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden-xs-up');
    });
  });

});
