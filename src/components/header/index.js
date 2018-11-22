/**
 *
 * name: index
 * date: 2018/11/20
 * author: cengfucheng
 * about: 顶部工具栏
 *
 */

import React, { Component } from 'react';

import { Button } from 'semantic-ui-react'
import './index.scss';

export default function () {
  return (
    <div className='head-top'>
      <div className='head-logo'>
        <h1 className='ui header'>PXTAR AVG</h1>
      </div>
      <div className='head-right'>
        <div className='ui icon input'>
          <input type='text' placeholder='Search...'/>
          <i aria-hidden='true' className='search icon'/>
        </div>
        <Button className='ui yellow button' role='button'>
          保存
        </Button>
        <Button className='ui fade animated button' role='button'>
          <div className='visible content'>注册会员帐户</div>
          <div className='hidden content'>每月 2.99</div>
        </Button>
      </div>
    </div>
  )
}
