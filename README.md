# reactappconcepts #
This repo shall contain boilerplate react code, wiki, readme, learnings, etc..

----------

## Contents ##
- Boilerplate app.
- Creating state dynamically.
- Updating the parent state: bidirectional flow.
- Links to good articles.
- Module Loaders:
-   require.js
-   browserify
-   webpack
- For react use webpack more featureful.
- Code all modules seperately and have a single entry point.
- Just say: `require(./module.js);` -> this wont work in a browser.
- So use a node js installed on the system
- https://reactjs.org/docs/reconciliation.html 
- react Fiber : is from react 15.5.0 and definetely from React 16. 
- https://github.com/acdlite/react-fiber-architecture


----------

## References: ##

1. https://mobilunity.com/blog/react-js-developer-salary-in-different-countries/ 
2. https://www.payscale.com/research/AU/Job=Web_Developer/Salary/1673c088/React.js
3. https://moduscreate.com/blog/key-concepts-to-help-learn-reactjs/
4. bootstrapcdn.com
----------

## Instructions to setup this project: ##

- npm init (reactappconcepts)
- npm install -S webpack (brings all dependent modules under the node_modules directory)
- webpack.config.js file -> https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3
- npm install -g webpack
- npm install webpack-cli -D (The CLI moved into a separate package: webpack-cli.)
- npm install --save lodash
- npm install -g webpack-cli
- webpack-cli --config webpack.config.js
- npm install -S jquery
- npm install -S lodash

----------

With the above, I now added the configurations under webapck.config.js under section module/rules section. 

Look at the values used for transpiling js code.

Now I add  the `<div id='app'></div>` into `index.html`

Then I create the Layout component under index.js (look at code)
`npm install webpack-dev-server --save-dev`

Add the following to package.json :  "start:dev": "webpack-dev-server --content-base src --inline --hot", (for starting webpack server in hot reload mode)

Then open: http://localhost:8080 

Please note the index.html has to be under the src dir as all contents under this dir are only rendered.


----------

## About Components: ##
A component must have a render function.
A `render` function must return one elemen
t only. It can never return 2 elements. In such a case you can wrpa both the elements in a parenmt element like a div.
`Constructor` : should have a super() function as its first line of the file.
The data in a component shall be either in state, props or context.
We need to use 'export default class <ComponentName> ..' inoder to make the <ComponentName> being imported in other components.

Notes:
In case there is a event handler function, you should bind that to the `this` object. If this is not done, then you can't access the `this` object properties like `props` and `state`.

Changing data in parent class (like state of parent) can be done by sending a function from parent to child component.

In the the `Layout->Header->Title` example, the data lives in the `Layout` component only. The `header` and `title` components are dumb components.



Open the index.html in your browser: file:///C:/RAKESH/REACTJS/reactappconcepts/index.html


----------

Extra (not used)
  NODE_ENV=production webpack
  Mockeroo -> to create random json object.

