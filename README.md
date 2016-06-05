AngularJS Exam
==============

## Features

- List repositories
- Filter repositories
- List the issues inside repository visualization

## Tools:

- Sass (Ruby)
- Bower
- Gulp
- BrowserSync
- Jasmine
- Karma
- Protactor
- Angular Material Design
- ES6 (Babel)
- Jade (or Pug)

```
  Before:  
  `$ sudo npm install -g gulp-cli bower` to install global dependencies
  `$ sudo su -c "gem install sass"` to install sass
  `$ npm install` to install node dependencies
  `$ bower install` to install bower dependencies

  Gulp tasks:
  `$ gulp` to build an optimized version of your application in folder dist
  `$ gulp serve` to start BrowserSync server on your source files with live reload
  `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
  `$ gulp test` to run your unit tests with Karma
  `$ gulp test:auto` to run your unit tests with Karma in watch mode
  `$ gulp protractor` to launch your e2e tests with Protractor
  `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
```
