# GitDools
GitDools is a Github Client made with `AngularJs` and `ES6` for the Edools Front-End Exam.

**Please test the app that was deployed at Heroku because Github needs a real domain to work as expected**

Deployed App: [https://gitdools.herokuapp.com](https://gitdools.herokuapp.com)

## Features
* Search for repositories
* View Readme of a repository
* View issues of a repository
* View details like forks and stars of a repository
* Comment about an issue in a repository
* Sign in via OAuth on Github

## Architecture
GitDools was made with `AngularJs` using the `ES6` version of ECMAScript. The app is modularized by features and It run over a `NodeJs Express Server` that have some endpoints for OAuth and it is used to serve static files with GZip compression.

## Tools Used in Development
* `Gulp` to automate tasks
* `Bower` to manage front-end libs
* `NodeJs`
* `BrowserSync` to serve app with support to live reload when detect file changes
* `Karma & Jasmine` for tests
* `Yeoman Generator Gulp Angular` for scaffold of project

## Styles

GitDools style is based on `bootstrap-sass`. It is reponsive and have a custom version of `bootstrap-sass` made especially for him.
All o `scss` source can be found at `src/assets/sass`.

## TODO
* Improve test coverage
* Implement E2E tests
* Add pagination to Issues List
* Add scroll to Issue Comments

# Development

### Getting Started

Prepare the development enviroment by running:

```
$ npm install -g gulp bower
```

Install app dependencies by running inside app path:

```
$ npm i
```

Serve app in development mode by running:

```
$ gulp serve
```

Serve app in dist mode by running:
```
$ gulp serve:dist
```

### Tests

You can run tests by running:

```
$ gulp test
```

#### Ps: Considering the time that I had to develop, I believe that the result was great :)
