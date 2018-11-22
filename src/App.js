import React, { Component } from 'react';

// import LoadPanel from './components/loading/LoadPanel';
import Routers from './router/index';

import './App.css';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  constructor () {
    super();
    this.state = {
      loading: false
    }
    this.clickThis = this.clickThis.bind(this);
  }
  clickThis () {
    this.setState({
      loading: !this.state.loading
    })
  }
  render() {
    return (
      <div className='App'>
        <Routers/>
      </div>

    );
  }
}

export default App;
