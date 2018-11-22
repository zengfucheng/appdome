import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Router from './router/index';

import { BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch } from 'react-router-dom';
import Routers from "./router";
ReactDOM.render(
  <BrowserRouter>
    <App/>

  </BrowserRouter>
  , document.getElementById('root'));

// ReactDOM.render((<HashRouter>
//     <App>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </App>
//   </HashRouter>),
//   document.getElementById('root'));
// ReactDOM.render((<HashRouter>
//     <App>
//       <Link to="/" component={Home} />
//       <Route to="/about" component={About} />
//     </App>
//   </HashRouter>),
//   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
