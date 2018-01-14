# Materials
[![Windows Build][appveyor-image]][appveyor-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

This project contains custom components missed in angular materials2. They can be used in angular2 apps.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Components

* Carousel

An Image Carousel.
![Carousel Example](assets/carousel.png "Carousel component")

Using in template:
```
<rm-materials-carousel [images]="images">
  ... loading carousel
 </rm-materials-carousel>
```
Styling
```
rm-materials-carousel {
    height: 200px;
}
```

Images can be an object with attributes "src" and "alt" for only one image or an array of such objects.

* Image-Viewer
![Image-Viewer Example](assets/img-viewer.png)

An image preview for an array of objects with attributes "src" and "alt". Using in template:
```
<rm-materials-img-viewer [images]="images4">
  ..Loading img-viewer
</rm-materials-img-viewer>
``` 
Styling
```
rm-materials-img-viewer, rm-materials-img-viewer div img {
    height: 200px;
}
```

## Install

Use npm to install
```
npm install rm-materials --save
```
Include font-awesome into your site using cdn
```
  <!--Installing font-awesome via cdn-->
  <script src="https://use.fontawesome.com/494a603944.js"></script>
```
or in angular.json
```
...
"styles": [
  ...,
  "../node_modules/font-awesome/css/font-awesome.css"
],
...
```

[appveyor-image]: https://img.shields.io/appveyor/ci/richard-martens/materials/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/richard-martens/materials
[travis-image]: https://img.shields.io/travis/richard-martens/materials/master.svg?label=linux
[travis-url]: https://travis-ci.org/richard-martens/materials
[coveralls-image]: https://img.shields.io/coveralls/richard-martens/materials/master.svg
[coveralls-url]: https://coveralls.io/r/richard-martens/materials?branch=master
[gemnasium-image]: https://gemnasium.com/richard-martens/materials.svg
[gemnasium-url]: https://gemnasium.com/richard-martens/materials