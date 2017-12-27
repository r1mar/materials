import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  current;
  @Input() images;

  constructor() { 
    this.current = {};

  }

  ngOnInit() {
    if(this.images){
      if(Array.isArray(this.images)) {
        if(this.images.length > 0)
          this.current.image = this.images[0];
      } else
        this.current.image = this.images;

      if(this.current.image) {
        this.current.index = 0;
      }
    }
  }

  public next() {
    this.checkImageLengthForNavigation();

    if(this.current.index == (this.images.length - 1))
      throw new Error("Last image reached");

    this.changeImage(this.current.index++);
  }

  public prev () {
    this.checkImageLengthForNavigation();

    if(!this.current.index)
      throw new Error("First image reached");

    this.changeImage(this.current.index--);
  }

  public loadingCompleted() {
    if(!this.current.image || !this.current.image.loading)
      return;
    
    delete this.current.image.loading;

      delete this.current.image.busy;
  }

  private changeImage(index) {

    this.current.image.busy = true;

      this.current.image.loading = true;
      this.current.image = this.images[this.current.index];

  }

  private checkImageLengthForNavigation() {
    if(!this.images || Array.isArray(this.images) && !this.images.length)
      throw new Error("there is no images for navigation");

    if(!Array.isArray(this.images) || this.images.length == 1)
      throw new Error("there is only one image");
  }
}
