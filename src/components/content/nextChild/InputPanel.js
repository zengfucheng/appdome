/**
 *
 * name: InputPanel
 * date: 2018/11/21
 * author: cengfucheng
 * about: 输入框基本组件
 *
 */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

export default class InputPanel extends Component {

  handleChange (e) {
    // 根据type, 自行增加验证机制
    const { type, onChange } = this.props;
    if(e.target.value == '') {
      onChange(e.target.value);
      return;
    }
    switch (type) {
      case 'input':
        console.log(type);
        break
      case 'psw':
          console.log(type);
        break;
    }
    onChange(e.target.value);
  }

  render () {
    const { autoFocus, size, placeholder, label, disabled,
            onChange} = this.props;
    return (
      <Input autoFocus={autoFocus} size={size} placeholder={placeholder} disabled={disabled}
             label={label} onChange={this.handleChange.bind(this)}/>
    )
  }
}
