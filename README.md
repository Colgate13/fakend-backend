<h1 align="center">Fakend-backend</h1>

<p align="center">
  <a href="#technologies-">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation-and-run">Installation and run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## Technologies 🐱‍🏍🎂
- [NPM](https://www.npmjs.com/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [Eslint](https://eslint.org/)
- [Firebase](https://firebase.google.com/)

## 💻 Project - Build a fake Back End

A website made by developers for developers, with our tool you can simulate a Back End to be able to test your interface without having to create an entire API. Integrations with Firebase were used, to use firestone, auth and other modules.

## Firebase - Firestone

To use firebase I created a simple ORM called Query. This orm performs the integration and configuration with firebase and provides classes/functions for querying/creating/editing data in the firestone base.

## Firebase - Auth

To perform the integration with Firebase Auth, a module was created calling Auth that performs all the configurations and the integration directly with Google Auth

## Installation and run

```yarn 
git clone https://github.com/SmartsFields/fakend-backend.git
npm ci i
npm run-script test:watch
npm run-script dev

$ > Server is running in 3000!
```
