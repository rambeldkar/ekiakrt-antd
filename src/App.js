import React,{useState,useEffect} from 'react';
import './App.less';
import {
  BrowserRouter as Router,
  Switch as Switch1,
  Route,
  Link
} from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import Salessummary from './components/views/dashboard/sales-summary/Salessummary.js'
import Paymentmethods from './components/views/dashboard/payment-methods/Paymentmethods.js'
import Footerlayout from './components/common/footer/Footer.js'
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import Sidebarlayout from './components/common/sidebar/Sidebar.js'
import Headerlayout from './components/common/header/Header.js'
import { Layout,Switch} from 'antd';

const App = () => {
  const { Header, Sider } = Layout;
  const [isDarkMode, setIsDarkMode] = React.useState();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };
  return (  
    <Router>
      <div className="ekiakrtApp" id="ekikartLayout">
      <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={isCollapsed} width={230} className="ekikartSidebar" breakpoint="lg"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
              <Sidebarlayout/>
          </Sider>
          <Layout className="site-layout">
              <Header className="bg-white" style={{ padding: 0 }}>
                  {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      onClick: () => setIsCollapsed(!isCollapsed),
                  })}
                  <Switch checked={isDarkMode} onChange={toggleTheme} />
                  <Headerlayout/>          
              </Header>
              <Switch1>
                <Route exact path="/">
                  <Salessummary />
                </Route>
                <Route path="/payment-methods">
                  <Paymentmethods />
                </Route>
              </Switch1> 
              <Footerlayout/>
          </Layout>
      </Layout>
      </div> 
    </Router> 
    );
  }

export default App;
