/**
 *
 * name: index
 * date: 2018/11/20
 * author: cengfucheng
 * about: router
 *
 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from '../containers/home/index';
import About from '../components/test/about';
export default function () {
  return (
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/' component={Home}/>
    </Switch>
  )
}
// import Home from '../components/test/home';
// import About from '../components/test/about';
//
// export default function () {
//   return (
//     <Switch>
//       <div>
//           <ul>
//             <li>
//               <Link to='/'>家</Link>
//             </li>
//             <li>
//               <Link to='/about'>关于</Link>
//             </li>
//           </ul>
//           <Route exact path='/' component={Home}/>
//           <Route path='/about' component={About}/>
//       </div>
//     </Switch>
//   )
// }
