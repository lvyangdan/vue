import React from "react";
import { Cascader } from 'antd';
const options = [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }];
class Cascadera extends React.Component{   
onChange(value) {
  console.log(value);
}
render(){
  return(<div>
     <Cascader options={options} onChange={this.onChange.bind(this)} placeholder="Please select" /> 
  </div>)
}
}
export default Cascadera

