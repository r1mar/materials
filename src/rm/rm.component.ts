import { Component } from '@angular/core';

@Component({
  selector: 'rm-root',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.css']
})
export class RmComponent {
  title = 'app';
  images = [];
  images0;
  images1 = [{
    src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
    alt: 'Pastel portrait'
  }];
  images2;
  images3 = [{
    src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
    alt: 'Pastel portrait'
  }, {
    src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait3.jpg',
    alt: 'Bleistiftporträt'
  }, {
    src : 'http://tm-portraits.de/Content/images/examples/Buntstiftportrait1.jpg',
    alt : 'Buntstiftporträt'
  }];
  images4 = [{
    src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait4.jpg',
    alt: 'Pastel portrait'
  }, {
    src: 'http://tm-portraits.de/Content/images/examples/Pastelportrait3.jpg',
    alt: 'Bleistiftporträt'
  }, {
    src : 'http://tm-portraits.de/Content/images/examples/Buntstiftportrait1.jpg',
    alt : 'Buntstiftporträt'
  }, {
    src : 'http://tm-portraits.de/Content/images/Pastelportrait.jpg',
    alt : 'Pastelporträt vom Foto'
  }, {
    src : 'http://tm-portraits.de/Content/images/examples/Bleistiftportrait3.jpg',
    alt : 'Bleistiftporträt'
  }, {
    src : 'http://tm-portraits.de/Content/images/examples/Pastelportrait1.jpg',
    alt : 'Pastelporträt'
  }, {
    src : 'http://tm-portraits.de/Content/images/examples/Bleistiftportrait6.jpg',
    alt : 'Bleistiftporträt'
  }, {
    src : 'http://tm-portraits.de/Content/images/examples/Bleistiftportrait1.jpg',
    alt : 'Bleistiftporträt'
  }];
}
