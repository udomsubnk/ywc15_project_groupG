import React, { Component } from 'react'
import { Button,Modal } from 'antd';

class FilterBusItem extends Component{
    filename=""
    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }
    constructor(props) {
        super(props);
        this.filename = 'img/'+this.props.data.img;
    }

    render(){
        return(
            <div style={{
                width:'100%',
                height:'200px',
                margin:'10px auto',
                boxShadow: '1px 3px 3px rgba(0,0,0,0.2)',
                borderRadius: '10px'
                }} onClick={this.props.next}>
                
                
                <div style={{
                    width:'30%',
                    height:'100%',
                    display:'inline-block',
                    }}>
                    <img src={this.filename} width="100%" height="100%"></img>
                </div>
                <div style={{
                    width:'69%',
                    height:'198px',
                    display:'inline-block',
                    
                    }}>
                    <h2 style={{marginLeft:'30px',marginTop:'20px'}}>{this.props.data.name}</h2>
                    <div style={{float:'right'}}>
                        <div style={{marginLeft:'20px'}}>
                        <Button>ดูรายละเอียด</Button>
                        {/* <Button type="primary" onClick={this.props.next2}>จองที่พักนี้</Button> */}
                        <button style={{marginLeft:'20px',border:'0',borderRadius:'10px',backgroundColor:'#ffcc33',color:'000000'}} onClick={this.props.next2}>จองรถทัวร์</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default FilterBusItem