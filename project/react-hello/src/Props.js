import React from 'react';
import Props1 from './Props1.js'
//proops实现组件之间的数据沟通
export default class Props extends React.Component{
	constructor(){
		super()
		this.state={
			title:'first title'
		}
	}
	change(){
		this.setState({
			title:"second title"
		})
	}
	render(){
		return(<div>
			<Props1 title={this.state.title} width="100%"value="Login in" fw={700} color="pink"><span>g</span></Props1>
			<Props1 value="Sign out"></Props1>
			<button onClick={this.change.bind(this)}>改变</button>
		</div>)
	}
}