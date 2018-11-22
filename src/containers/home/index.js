/**
 *
 * name: index
 * date: 2018/11/20
 * author: cengfucheng
 * about: home
 *
 */

import React, { Component } from 'react';

import HeadTool from '../../components/header/index';
import StagePanel from '../../components/content/index';
import './home.scss';

export default class HomeView extends Component{

  render () {
    return (
      <div className='home-box'>
        <HeadTool/>
        <StagePanel/>
      </div>
    );
  }
}
