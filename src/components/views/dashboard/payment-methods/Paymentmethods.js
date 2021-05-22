import React,{useEffect} from 'react';
import Pagetitle from '../../../layout/Pagetitle.js'
import Paymentmethodslist from './list.js'
import Rangepicker from '../../../layout/Rangepicker.js'
import Selectsummary from '../../../layout/Selectsummary.js'
import { Layout,Row,Col,Button,Skeleton} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';
const { Content } = Layout;
const title = "Payment Methods";

const Paymentmethods = () => {
   const [ loading, setLoading ] =  React.useState(true);
   useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
   },[])
   return ( 
      <>        
          <Pagetitle title={title}/>
          <Row style={{padding:'0 14px 14px 14px'}} type="flex">            
              <Col>
                  <Rangepicker/>
              </Col>
              <Col>            
                  <Selectsummary selectvalue="Summary"/>
              </Col>
              <Col className="ml-auto">    
                  <Button type="primary" icon={<DownloadOutlined />}>Export</Button> 
              </Col>
          </Row>
          <Content  style={{minHeight: 200}}>
           <Row>
                <Col lg={24} xs={24}>
                    <div  className="bg-white" style={{margin: '0px 14px 0px 14px',padding: 14}}>
                        <Skeleton paragraph={{ rows:11 }} loading={loading} active >
                            <h4 className="mb-1 text-uppercase">Payment Methods</h4>
                            <Paymentmethodslist/>
                        </Skeleton>
                    </div>
                      
                </Col>
            </Row>
          </Content>         
      </>
    );
  }
export default Paymentmethods;
