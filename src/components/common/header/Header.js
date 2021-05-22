import React from 'react';
import '../../../App.less';
import { Menu,Avatar, Dropdown,Row, Col } from 'antd';
import {
  AppstoreOutlined,LogoutOutlined,SettingOutlined,UnlockOutlined   
} from '@ant-design/icons';
import Avtar from '../../../assets/images/avtar.jpg'
const menu = (
  <Menu className="avtarDropdown">
    <Row className="avtarTop">
      <Col flex="none"><Avatar src={Avtar} shape="square" size={45} /></Col>
      <Col flex="auto" style={{padding:'0 10px'}}>
          <h4 style={{marginBottom:'0px',color:'#ffffff'}}>Hello, Partner Section</h4>
          <p style={{marginBottom:'0px',color:'#ffffff',opacity: .9}}>partner@spacepointe.com</p>
      </Col>
    </Row>
    <Row  justify="center" align="top" className="avtarBottom" >
      <Col span={12} align="center">
          <a href="">
            <span className="icon"><AppstoreOutlined /></span>
            <span className="title">My Profile</span>
          </a>
      </Col>
      <Col span={12} align="center">
          <a href=""> 
            <span className="icon"><SettingOutlined  /></span>
            <span className="title">Settings</span>
          </a>
      </Col>
      <Col span={12} align="center">
          <a href=""> 
            <span className="icon"><UnlockOutlined/></span>
            <span className="title">Change Password</span>
          </a>
      </Col>
      <Col span={12} align="center">
          <a href="">
            <span className="icon"><LogoutOutlined /></span>
            <span className="title">Logout</span>
          </a>
      </Col>
    </Row>
  </Menu>
);
const Headerlayout = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']} size={300} arrow >
    <a href="" className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{float: 'right',margin: '10px'}}>
        <Avatar src={Avtar} shape="circle" size={40} style={{float: 'right'}}/>
    </a>
    </Dropdown>
    );
}
export default Headerlayout;
