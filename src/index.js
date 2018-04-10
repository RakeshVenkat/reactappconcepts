import React from 'react';
import ReactDOM from 'react-dom';
//require('./module1.js');
//require('./module2.js');

class Layout extends React.Component {
  render() {
    return (
        <h2>This works too with hot reload !!</h2>
    );
  }
}
const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
