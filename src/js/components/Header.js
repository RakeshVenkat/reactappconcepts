import React from 'react';
import Title from './Title.js';

export default class Header extends React.Component {
  handleInput(e) {
    this.props.changeName(e.target.value);
    console.log(e.target.value);
  }

  render() {
    // console.log(this.state.title);

    return (
      <header>
        <Title title={this.props.name}/>
        <input value={this.props.name} onChange={this.handleInput.bind(this)}/>
        <h2>This is the header of the page.</h2>
      </header>
    );
  }
}

