import React from "react";
import ReactDOM from 'react-dom';
// import Shop from "./Shop.js"
// import Header from "./Header.js";
// import Squer from "./Squer.js";
// let name="lvyangdan";
// let hh=<h1>我是一个标签</h1>;
// let obj={
// 	name:"lvyangdan",
// 	age:18,
// 	sex:"男"
// }
// let el=<div className={name}><p>姓名：{obj.name},年龄：{obj.age}</p>
// {/*注释的写法*/}
// </div>;//申明式渲染
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const el = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// ReactDOM.render(el,document.getElementById('root'));
//函数运用
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick, 1000);
//定义组件(功能块)
//functional创建和调用方式
// function Hello(){
// 	return (<div>我是一个<strong>标签</strong></div>)
// }
// ReactDOM.render(<Hello />,document.getElementById('root'));

//class创建方式
// let name="lvyangdan";
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {name}</h1>;
//   }
// }
// ReactDOM.render(<Welcome />,document.getElementById('root'));
// let i=document.getElementById('root');
// import Tabs from './tabs.js';
// import Props from './Props.js';
// import ChangeStyle from './ChangeStyle.js';
// import App from './App.js';
// import EReact from './React.js';
// import Row from './Row.js';
// import Bootstrap from "./Bootstrap"
// import Boot from "./Boot";
import Antd from "./Antd.js";
ReactDOM.render(<Antd />,document.querySelector("#root"));
