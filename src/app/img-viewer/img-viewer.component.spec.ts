import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { ImgViewerComponent } from './img-viewer.component';

describe('ImgViewerComponent', () => {
  let component: ImgViewerComponent;
  let fixture: ComponentFixture<ImgViewerComponent>;

  var fCheckNavLink = function (oFixture: ComponentFixture<ImgViewerComponent>,
    sTag: string,
    bHidden) {
    var aNav = oFixture.debugElement.query(By.css(sTag)),
      oMatcher = expect(aNav.classes["hidden-xs-up"]);

    if (bHidden) {
      oMatcher.toBeTruthy();
    } else {
      oMatcher.toBeFalsy();
    }
  }, fCheckNavLinks = function (oFixture: ComponentFixture<ImgViewerComponent>, bPrevHidden, bNextHidden) {
    fCheckNavLink(oFixture, "a.prev", bPrevHidden);
    fCheckNavLink(oFixture, "a.next", bNextHidden);
  }, fInitScrollContainer = function (oFixture: ComponentFixture<ImgViewerComponent>,
    sWidth: string,
    nNumberImages: number): ImgViewerComponent {
    oFixture.elementRef.nativeElement.style.height = "100px";
    oFixture.elementRef.nativeElement.style.width = sWidth;
    oFixture.elementRef.nativeElement.style.padding = "0 5px"
    component = oFixture.componentInstance;

    if (nNumberImages) {
      component.images = [];
    }
    for (var i = 0; i < nNumberImages; ++i) {
      component.images.push({
        src: "data:image/gif;base64,R0lGODlhZABkAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAABkAGQAAAihAPcJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsxYcEAAOw==",
        alt: "image 100 x 100"
      });
    }

    if (nNumberImages) {
      oFixture.detectChanges();

      //setting the margin of all images to 5px
      var oScrollContainer = oFixture.debugElement.query(By.css("div.scroll-container"));
      for (var i = 0; oScrollContainer.children && i < oScrollContainer.children.length; ++i) {
        oScrollContainer.children[i].nativeElement.style.margin = "0 5px";
      }
    }

    return component;
  }, fBeforeEach = function (sWidth?: string, nNumberImages?: number) : ComponentFixture<ImgViewerComponent> {
    var oFixture = TestBed.createComponent(ImgViewerComponent),
        oComponent = oFixture.componentInstance;

    if (sWidth || nNumberImages) {
      fInitScrollContainer(oFixture, sWidth, nNumberImages);

      oFixture.detectChanges();
    }

    oComponent.ngOnInit();
    oFixture.detectChanges();

    return oFixture;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImgViewerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = fBeforeEach();
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe("empty lists", () => {
    beforeEach(() => {
      fixture = fBeforeEach();
      component = fixture.componentInstance;
    });

    it("should hide navigation links", () => {
      fCheckNavLinks(fixture, true, true);
    });

    it("navigation links should throw an error", ()=>{
      expect(function(){
        component.prev();
      }).toThrowError("Navigation works only with given images");

      expect(function(){
        component.next();
      }).toThrowError("Navigation works only with given images");
    });
  });

  describe("list shows all images", () => {
    beforeEach(() => {
      fixture = fBeforeEach("110px", 1);
      component = fixture.componentInstance;
    });

    it("should hide navigation links", () => {
      fCheckNavLinks(fixture, true, true);
    });
  });

  describe("First of two images are fully visible", () => {
    beforeEach(() => {
      fixture = fBeforeEach("219px", 2);
      component = fixture.componentInstance;
    });

    it("should hide navigation to the prev", () => {
      fCheckNavLinks(fixture, true, false);
    });

    it("after navigation to the next, navigation links should switch their visibillity", () => {
      component.next();

      fixture.detectChanges();

      fCheckNavLinks(fixture, false, true)

    });

    it("after anvigation back, navigation links should switch their visibillity ", () => {
      component.prev();

      fixture.detectChanges();

      fCheckNavLinks(fixture, true, false);
    });

  });

  describe("Vieport shows only one of three parts of screen", () => {
    beforeEach(()=>{
      fixture = fBeforeEach("250px", 6);
      component = fixture.componentInstance;
    });

    it("navigation links switching visibillity depends on position", ()=>{
      //navigation to previous out of range should be ignored
      component.prev();

      component.next();

      fixture.detectChanges();

      //in the middle both navigationlinks are to be visible
      fCheckNavLinks(fixture, false, false);
      
      component.next();

      fixture.detectChanges();
      //on the end next is to be hidden
      fCheckNavLinks(fixture, false, true);
      
      //Navigation to the next out of range should be ignored
      component.next();

      component.prev();

      fixture.detectChanges();
      //in the middle both navigationlinks are to be visible
      fCheckNavLinks(fixture, false, false);

      fixture.elementRef.nativeElement.style.width = "500px";
      component.onResize();
      fixture.detectChanges();
      //by resizing to 500 the scroll position have to be stable and all images to the end visible
      //the next link have to be hidden
      fCheckNavLinks(fixture, false, true);
    });


  });
});
