# cancel.it

[![npm](https://img.shields.io/npm/v/cancel.it.svg)](https://www.npmjs.com/package/cancel.it)
[![License](https://img.shields.io/npm/l/cancel.it.svg)](https://www.npmjs.com/package/cancel.it)
[![Build Status](https://travis-ci.org/Eazymov/cancel.it.svg?branch=master)](https://travis-ci.org/Eazymov/cancel.it)
[![Coverage Status](https://coveralls.io/repos/github/Eazymov/cancel.it/badge.svg?branch=master)](https://coveralls.io/github/Eazymov/cancel.it?branch=master)
![types: typescript/flow](https://img.shields.io/badge/types-typescript%2Fflow-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Eazymov/cancel.it/pulls)

> Cancelable promise | [github.com/Eazymov/cancel.it](https://github.com/Eazymov/cancel.it#readme)

- [Installation](#installation)
- [About](#about)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

### Direct `<script />` include

The library will be exposed as a global `Cancelable` variable

```html
<script src="https://cdn.jsdelivr.net/npm/cancel.it@latest"></script>
```

**or** via unpkg

```html
<script src="https://unpkg.com/cancel.it@latest"></script>
```

### NPM

```bash
npm install cancel.it --save
```

### Yarn

```bash
yarn add cancel.it
```

## About

A promise wrapper that provides possibility to create cancelable promises and wrap existing ones. Supports both TypeScript and Flow type annotations out of the box. Commonjs and es6-modules compatible

## Usage

```javascript
import Cancelable from 'cancel.it';

// This
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    someCondition ? resolve(someValue) : reject(reason);
  }, 1000);
});

// Turns into this
const cancelable = new Cancelable((resolve, reject) => {
  setTimeout(() => {
    someCondition ? resolve(someValue) : reject(reason);
  }, 1000);
});

// OR
const cancelable = Cancelable.from(promise);

cancelable.isCanceled(); // false
cancelable.cancel();
cancelable.isCanceled(); // true

// Will never be fired
cancelable.then(/* ... */);
cancelable.catch(/* ... */);
cancelable.finally(/* ... */);
```

## Questions

If you have any troubles, questions or proposals you can create the [issue](https://github.com/Eazymov/cancel.it/issues)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019 - present, Eduard Troshin
