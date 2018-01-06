import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button } from 'antd'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "", //ข้อมูลทั้ง resort และ bus ที่ axios get มา
      optionsearch: "", //เลือกว่าจะเอา bus, resort, resort+bus
      selectedResort: "", //เลือกว่าจะเอา resort ไหน
      selectedBus: "", // เลือกว่าจะเอา bus ไหน
      visibleState: 0, //0 = หน้าแรกก่อน search , 
                       //1 = ขึ้นหน้า filter หลังกด search, 
                       //2 = show resort ที่ select, 
                       //3 = show bus,
                       //4 = conclude,

    };
    this.changeOptionSearch = this.changeOptionSearch.bind(this)
    this.changeState = this.changeState.bind(this)
    this.changeResort = this.changeResort.bind(this)
    this.changeBus = this.changeBus.bind(this)
  }

  changeOptionSearch = value => {
    this.setState({ optionsearch: value });
  };

  changeState = value => {
    this.setState({ visibleState: value });
  };

  changeResort = value => {
    this.setState({ selectedResort: value });
  };

  changeBus = value => {
    this.setState({ selectedBus: value });
  };

  render() {
    return (
      <div className="App">
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
