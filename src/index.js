import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';
require('./module1.js');
// require('./module2.js');
import Layout from './js/components/Layout';
import Posts from './js/components/Posts';

class Index extends React.Component {
  constructor() {
    super();
    this.message = 'Make sure you add super() as the first line in a constructor';
    this.state = { name: 'Micheal Jackson.' };
  }

  getVal() {
    return 'It is a good idea to keep the logic outside of the render function';
  }

  getSum(a, b) {
    return a + b;
  }

  render() {
    const thisIsAJSString = 'Java script objects can be used in JSX using curly braces';
    const aJSObj = { name: 'Rakesh Venkat' };

    setTimeout(() => {
      this.setState({ name: 'Bruce Almighty' });
    }, 5000);

    return (
      <div>
        <h2>This works too with hot reload !!</h2>
        <h3> Hello, {data.firstName} {data.lastName} </h3>
        <p>JSX needs to return a single parent element. hence we have wrapped all the elements under the div element </p>
        <p>A JS String: {thisIsAJSString}</p>
        <p>A JS Object : {aJSObj.name}</p>
        <p>You can do an arithmetic operation like 3+2 : {3 + 2}</p>
        <p>You can run an ananymous function using curly braces as below:
          {function() {
            console.log('I am logging from an ananymous function within JSX..');
          }}</p>
        <p>This is a function invocation using the this keyword and curly braces: {this.getVal}</p>
        <p>Calling a sum function: {this.getSum(3, 2)}</p>
        <p>You can even have a constructor: {this.message}</p>
        <p>My name will change after 5 secs: {this.state.name}</p>
      </div>
    );
  }
}
const app = document.getElementById('app');
const components = document.getElementById('components');
const routes = document.getElementById('routes');
const posts = document.getElementById('posts');

ReactDOM.render(<Index/>, app);
ReactDOM.render(<Layout/>, components);
ReactDOM.render(<Login/>, routes);
ReactDOM.render(<Posts/>, posts);
/* ReactDOM.render(<h1>Hello1</h1>, routes); */
