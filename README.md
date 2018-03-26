# reactappconcepts
This repo shall contain boilerplate react code, wiki, readme, learnings, etc..

Boilerplate app.
Creating state dynamically.
Updating the parent state: bidirectional flow.
Links to good articles.
Module Loaders:
  require.js
  browserify
  webpack
For react - use webpack - more featureful.
Code all modules seperately and have a single entry point.
Just say: `require(./module.js);` -> this wont work in a browser.
So use a node js installed on the system


Instructions to setup this project:
npm init (reactappconcepts)
npm install -S webpack (brings all dependent modules under the node_modules directory)
webpack.config.js file -> https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3
npm install -g webpack
npm install webpack-cli -D (The CLI moved into a separate package: webpack-cli.)
npm install --save lodash
npm install -g webpack-cli
webpack-cli --config webpack.config.js
npm install -S jquery
npm install -S lodash

Open the index.html in your browser: file:///C:/RAKESH/REACTJS/reactappconcepts/index.html

Extra (not used)
  NODE_ENV=production webpack
  Mockeroo -> to create random json object.

