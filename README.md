# Setup

* Install python dependencies: `pip install -r requirements.txt`
* Install node dependencies: `npm install`
* Run server: `python server`
* Build javascript: `npm run dev`

# Purpose

* demo to get you started
* expose internals of React Router after I had some issues [at home](http://www.mattslinks.xyz/)
 

# Overview

* Routing library for React that makes it easier to build a SPA
* Can use browser API to keep track of history
* Made by 'React Training' - not Facebook 
* We're using v4 - subtle and annoying differences from v3 - so check the date of your SO questions
* Really nice demos at [React Training](https://reacttraining.com/react-router/web/example/basic)

# Three Basic Components

* Link
    * nav.js
* Route
    * content.js
    * routes.js
    * content-alt.js
* Router
    * index.js

# Collision with Redux

* Both systems use React's context feature
* Redux's connect function 'blocks' context updates
* redux.js
