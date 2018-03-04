# Observables + Redux + JSON API + Typescript Example App

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

A minimal example to show how to use [observable-redux-json-api](https://github.com/kristerkari/observable-redux-json-api) library using [React](https://reactjs.org/) and [Express.js](https://expressjs.com/).

This example app includes both backend ([Express](https://expressjs.com/)) and frontend ([React](https://reactjs.org/)) to show you how you can use [Redux](https://redux.js.org/), [RxJS](http://reactivex.io/rxjs/) and [JSON API](http://jsonapi.org/) together.

If you want to see an example of just using Redux and JSON API without RxJS, [have a look at this example app](https://github.com/tomharvey/redux-json-api-demo/) which uses the normal `redux-json-api`.

## This example app uses the following libraries

### Frontend

* [React](https://reactjs.org/)
* [Redux Observable](https://redux-observable.js.org/) (+ peer deps [Redux](https://redux.js.org/) and [RxJS](http://reactivex.io/rxjs/))
* [observable-redux-json-api](https://github.com/kristerkari/observable-redux-json-api) (+ peer dep [Redux Thunk](https://github.com/gaearon/redux-thunk))
* [Typescript](https://www.typescriptlang.org/)

### Backend

* [Express.js](https://expressjs.com/)
* [JSON API Serializer](https://github.com/SeyZ/jsonapi-serializer)

## Setup

### Step 1: Clone this repo

```sh
git clone git@github.com:kristerkari/observable-redux-json-api-typescript-example.git
```

### Step 2: Move to project and install project dependencies

```sh
cd observable-redux-json-api-typescript-example
```

```sh
npm install
```

or if you use Yarn:

```sh
yarn install
```

### Step 3: Start Express server

```sh
npm start
```

or

```sh
yarn start
```

### Step 4: Start Webpack server

```sh
npm run browser
```

or

```sh
yarn browser
```

### Step 5: Open React app in your web browser.

Open `http://localhost:8080` in your web browser.

## Visualize bundle size

It's important for any library to keep it's bundle size small. Currently the bundle size of the example app without minifying the code is around 59kb gzipped. There is some work still to be done to get that size to be smaller.

To visualize what the example app's bundle consists of:

```sh
npm run analyze-bundle
```

or

```sh
yarn analyze-bundle
```
