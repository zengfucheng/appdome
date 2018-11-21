/**
 *
 * name: index
 * date: 2018/11/20
 * author: cengfucheng
 * about: 主舞台区
 *
 */

import React, { Component } from 'react';
import './content.scss';


import './nextChild/leftState.scss';
import './nextChild/rightTool.scss';
import LeftState from './nextChild/LetfStage';
import RightState from './nextChild/RightTool';

export default class StagePanel extends Component{
  render () {
    return (
      <div className='content-stage'>
        <div className='cs-box'>
          <LeftState/>
          <RightState/>
        </div>
      </div>
    )
  }
}
