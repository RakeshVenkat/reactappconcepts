import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: 'John' };
  }

  changeName(name) {
    this.setState({ name });
  }

  render() {
      return (
      <div>
        <Header changeName={this.changeName.bind(this)} name={this.state.name}/>
        This is a default layout.
        <Footer />
      </div>
    );
  }
}

