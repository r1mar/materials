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
![Carousel Example](assets/carousel.jpg "Carousel component")

![Carousel Example](assets/carousel.jpg "Carousel component")

Using in template:
```
<rm-carousel [images]="images">
  ... loading carousel
 </rm-carousel>
```
Images can be an object with attributes "src" and "alt" for only one image or an array of such objects.

* Image-Viewer
![Image-Viewer Example](assets/img-viewer-example.png)

An image preview for an array of objects with attributes "src" and "alt". Using in template:
```
<rm-img-viewer [images]="images4">
  ..Loading img-viewer
</rm-img-viewer>
``` 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

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
