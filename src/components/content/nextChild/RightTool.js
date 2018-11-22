/**
 *
 * name: rightTool
 * date: 2018/11/20
 * author: cengfucheng
 * about: 右侧控制区域
 *
 */

import React, { Component } from 'react';
import { Button, Select, Modal, Input, Label, Header } from 'semantic-ui-react';

import InputPanel from './InputPanel';
import EditList from './EditList';

export default class RightTool extends Component{
  constructor () {
    super ();
    this.state = {
      id: NaN,
      error: false,
      name: '',
      obj: [{ name:'z',value: this.getUid, text: 'z'}, {name:'f',value: this.getUid, text:'f'}],
      open: false
    }
    this.addNode = this.addNode.bind(this);
  }

  get getUid () {
    return Math.round(Math.random() * Date.now());
  }

  addNode () {
    if(this.state.name == '') {
      this.setState({
        error: true
      })
      return;
    }
    let arr = this.state.obj.slice();
    arr.push({ name: this.state.name, value: this.state.id, text: this.state.name});
    this.setState({
        obj: arr
      });
    this.close();
  }

  open = () => {
    this.setState({ open: true })
  }
  close = () => {
    this.setState({
      name: '',
      open: false,
      error: false
    })
  }

  nameChange = (val) => {
    this.setState({
      name: val
    })
  }

  idChange = (val) => {
    this.setState({
      id: val
    })
  }

  render () {
    const { open, error } = this.state;
    const styles = {
      display: error ? 'block' : 'none'
    }
    return (
      <div className='cs-right-box'>
        <div className='cs-rb-top'>
          <div className='cs-rb-grid'>
            <Modal trigger={<Button content='新建剧情节点'/>}
                   open={open}
                   onOpen={this.open}
                   onClose={this.close}
                   size='tiny'
            >
              <Modal.Header>
                新建节点
              </Modal.Header>
              <Modal.Content>
                <div>
                  <Label style={styles} basic size='mini' pointing='below' color='red' content='名字不符合规范'></Label><br/>
                  <InputPanel type='input' autoFocus='autoFocus' size='mini' disabled={!open} placeholder='请输入剧情名' label='剧情名'
                              onChange={this.nameChange}/>
                  <InputPanel type='psw' size='mini' disabled={open} placeholder={this.getUid} label='id'
                              onChange={this.idChange}/>
                </div>
              </Modal.Content>
              <Modal.Actions>
                <Button color='blue' content='确定' onClick={this.addNode}/>
              </Modal.Actions>
            </Modal>
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
