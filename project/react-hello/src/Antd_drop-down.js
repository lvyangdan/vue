import React from "react"
import { Menu, Dropdown, Icon } from 'antd';

class Antd_drop_down extends React.Component{
	render(){
		return(<div>
				  <Menu>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
				    </Menu.Item>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
				    </Menu.Item>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
				    </Menu.Item>
				  </Menu>
		</div>)
	}
}

export default Antd_drop_down