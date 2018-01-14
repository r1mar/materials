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
      src: './assets/pastelzeichnung1.jpg',
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
        src: './assets/pastelzeichnung2.jpg',
        alt: 'Pastel portrait'
      };
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has src attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/assets/pastelzeichnung2.jpg');
    });

    it('should has alt attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
    });

    it('should has navigation links hidden', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden');
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
        src: './assets/pastelzeichnung1.jpg',
        alt: 'Pastel portrait'
      }];
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has src attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/assets/pastelzeichnung1.jpg');
    });

    it('should has alt attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
    });

    it('should has navigation links hidden', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden');
    });
  });

  describe('with three images', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
      component.images = [{
        src: './assets/pastelzeichnung1.jpg',
        alt: 'Pastel portrait'
      }, {
        src: './assets/bleistiftzeichnung1.jpg',
        alt: 'Bleistiftporträt'
      }, {
        src : './assets/buntstiftzeichnung1.jpg',
        alt : 'Buntstiftporträt'
      }];
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should has src attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/assets/pastelzeichnung1.jpg');
    });

    it('should has alt attribute assigned', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
    });

    it('should prev link hidden and next link visible', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden');
      expect(compiled.querySelector('a.next').getAttribute('class')).not.toContain('hidden');
    });

    describe('go to middle', () => {
      beforeEach(() => {
        component.next();
        fixture.detectChanges();
      });

      it('should has src attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/assets/bleistiftzeichnung1.jpg');
      });

      it('should has alt attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').alt).toEqual('Bleistiftporträt');
      });

      it('should prev link visible and next link visible', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.prev').getAttribute('class')).not.toContain('hidden');
        expect(compiled.querySelector('a.next').getAttribute('class')).not.toContain('hidden');
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
        expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/assets/buntstiftzeichnung1.jpg');
      });

      it('should has alt attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').alt).toEqual('Buntstiftporträt');
      });

      it('should prev link visible and next link hidden', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.prev').getAttribute('class')).not.toContain('hidden');
        expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden');
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
        expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/assets/pastelzeichnung1.jpg');
      });

      it('should has alt attribute assigned', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').alt).toEqual('Pastel portrait');
      });

      it('should prev link hidden and next link visible', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden');
        expect(compiled.querySelector('a.next').getAttribute('class')).not.toContain('hidden');
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
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden');
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
      expect(compiled.querySelector('a.prev').getAttribute('class')).toContain('hidden');
      expect(compiled.querySelector('a.next').getAttribute('class')).toContain('hidden');
    });
  });

});
