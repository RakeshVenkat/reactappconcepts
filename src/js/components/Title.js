import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.title} !!</h1>
      </div>
    );
  }
}


