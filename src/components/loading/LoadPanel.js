/**
 *
 * name: LoadPanel
 * date: 2018/11/20
 * author: cengfucheng
 * about: load组件
 *
 */
import React from 'react';
import loadImg from '../../assets/loading_green.gif';
import './LoadPanel.scss'
export default function (props) {
  return (
    <div className='loadBox' style="display:{props.loading}">
      <div className='loadchild'>
        <img alt='loading...' src={loadImg}/>
      </div>
    </div>
  )
}
