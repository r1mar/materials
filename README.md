# Materials
[![Windows Build][appveyor-image]][appveyor-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

This project contains custom components missed in angular materials2.

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

## Development server

This is only tools repository. It can not run. Create a test angular application for testing. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[appveyor-image]: https://img.shields.io/appveyor/ci/richard-martens/materials/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/richard-martens/materials
[travis-image]: https://img.shields.io/travis/richard-martens/materials/master.svg?label=linux
[travis-url]: https://travis-ci.org/richard-martens/materials
[coveralls-image]: https://img.shields.io/coveralls/richard-martens/materials/master.svg
[coveralls-url]: https://coveralls.io/r/richard-martens/materials?branch=master
[gemnasium-image]: https://gemnasium.com/richard-martens/materials.svg
[gemnasium-url]: https://gemnasium.com/richard-martens/materials
