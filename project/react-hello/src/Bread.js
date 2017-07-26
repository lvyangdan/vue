import React from "react";
import { AutoComplete } from 'antd';



class Complete extends React.Component {
  constructor(){
      super()
      this.state = {
        dataSource: []
      }
    }
  onSelect(value) {
    console.log('onSelect', value);
  }
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }
  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: "200" }}
        onSelect={this.onSelect.bind(this)}
        onSearch={this.handleSearch.bind(this)}
        placeholder="input here"
      />
    );
  }
}

export default Complete