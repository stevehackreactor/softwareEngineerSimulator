import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      divPosition: {
        top: '400px',
        left: '800px'
      }
    }

  }

  componentDidMount() {
    // Do some thing here
  }

  render() {
    return (
      <div>
        <span>Hey There, fellow Software Engineers</span>
      </div>
    );
  }
}

export default App;