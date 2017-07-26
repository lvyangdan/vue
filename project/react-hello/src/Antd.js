import React from "react";
import Menu from 'antd/lib/menu';
import Icon  from 'antd/lib/icon';
import "antd/dist/antd.css";
import Antd_drop_down from "./Antd_drop-down";
import Antd_Nav from "./Antd_Nav";
import Pagination from 'antd/lib/pagination';
import Antd_Step from "./Antd_Step";
import Affixe from "./Affix.js";
import Complete from "./Bread.js";
import Cascadera from "./Cascader.js";
import Time from "./Time.js";
import WrappedRegistrationForm from "./new.js"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Antd extends React.Component {
	onShowSizeChange(current, pageSize) {
		console.log(current, pageSize)
	}
  render() {
    return (<div>
    	<Antd_drop_down />
    	<Antd_Nav />
    	<Antd_Step />
      <Affixe />
      <Complete />
      <Cascadera />
      <Time />
      <WrappedRegistrationForm />
    	<Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange.bind(this)} defaultCurrent={6} total={500}/>
    </div>);
  }
}
export default Antd