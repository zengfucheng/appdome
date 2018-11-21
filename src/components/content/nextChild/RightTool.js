/**
 *
 * name: rightTool
 * date: 2018/11/20
 * author: cengfucheng
 * about: 右侧控制区域
 *
 */

import React, { Component } from 'react';
import { Button, Select } from 'semantic-ui-react';

import EditList from './EditList';

export default class RightTool extends Component{
  constructor () {
    super ();
    this.state = {
      obj: [{ name:'z',value:'z', text: 'z'}, {name:'f',value:'f', text:'f'}]
    }
    this.addNode = this.addNode.bind(this);
  }

  addNode () {
    console.log(this);
    let arr = this.state.obj.slice();
    arr.push({ name:'c',value:'c', text: 'c'});
    this.setState({
        obj: arr
      })
  }

  render () {
    return (
      <div className='cs-right-box'>
        <div className='cs-rb-top'>
          <div className='cs-rb-grid'>
            <Button size='mini' onClick={this.addNode}>新建剧情节点</Button>
            <Select compact basic placeholder='...' options={this.state.obj}/>
          </div>
          <div className='cs-rb-grid'>
            <Button size='mini' color='red'>预览</Button>
          </div>
        </div>
        <EditList/>
      </div>

    )
  }
}
