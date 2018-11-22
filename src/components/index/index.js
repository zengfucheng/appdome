/**
 *
 * name: index
 * date: 2018/11/19
 * author: cengfucheng
 * about:
 *
 */

import React, { Component } from 'react';
import Header from '../header';

export default class index extends Component {
  constructor (props) {
    super (props)
    console.log(this);
  }
  render () {
    return (
      <div>
        <Header name='fc'/>
        {this.props.name}
        <p>1234</p>
      </div>
    )
  }
}
