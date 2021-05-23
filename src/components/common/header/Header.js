import React from 'react';
import {
 Link
} from "react-router-dom";
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
          <h4 style={{marginBottom:'0px'}}>Hello, Partner Section</h4>
          <p style={{marginBottom:'0px',opacity: .9}}>partner@spacepointe.com</p>
      </Col>
    </Row>
    <Row  justify="center" align="top" className="avtarBottom" >
      <Col span={12} align="center">
          <Link to="/">
            <span className="icon"><AppstoreOutlined /></span>
            <span className="title">My Profile</span>
          </Link>
      </Col>
      <Col span={12} align="center">
          <Link to="/"> 
            <span className="icon"><SettingOutlined  /></span>
            <span className="title">Settings</span>
          </Link>
      </Col>
      <Col span={12} align="center">
          <Link to="/">
            <span className="icon"><UnlockOutlined/></span>
            <span className="title">Change Password</span>
          </Link>
      </Col>
      <Col span={12} align="center">
          <Link to="/">
            <span className="icon"><LogoutOutlined /></span>
            <span className="title">Logout</span>
          </Link>
      </Col>
    </Row>
  </Menu>
);
const Headerlayout = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']} size={300} arrow >
    <Link to="" className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{float: 'right',margin: '10px'}}>
        <Avatar src={Avtar} shape="circle" size={40} style={{float: 'right'}}/>
    </Link>
    </Dropdown>
    );
}
export default Headerlayout;
