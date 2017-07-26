import React from "react";
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Antd_Nav extends React.Component {
	constructor(){
		super()
		this.state = {
		    current: 'mail'
		  }
  	}
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />首页
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />指引
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />组件</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">模式</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Antd_Nav