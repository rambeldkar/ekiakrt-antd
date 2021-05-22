import React from 'react';
import { Table} from 'antd';
import {DollarTwoTone,CreditCardTwoTone ,WalletTwoTone,GiftTwoTone } from '@ant-design/icons';
const { Column } = Table;
const columns = [
    {
      title: 'Sales',
      dataIndex: 'label',
      key: 'label',
      fixed: 'left',
      width: 180,
      render: label => (
        <>
        {label.map(tag => {
          let icon = tag;
          if (tag === 'Cash') {
            icon = <DollarTwoTone className="fs-15 icon"/>;
          }
          if (tag === 'Card') {
            icon = <CreditCardTwoTone className="fs-15 icon"/>;
          }
          if (tag === 'Wallet') {
            icon = <WalletTwoTone className="fs-15 icon"/>;
          }
          if (tag === 'Other') {
            icon = <GiftTwoTone className="fs-15 icon"/>;
          }
          if (tag === 'Total Collected') {
            icon = '';
          }
          if (tag === 'Fees') {
            icon = '';
          }
          if (tag === 'Net Total') {
            icon = '';
          }
          return (
            <div key={tag}>
              {icon} <span>{tag}</span>
            </div>
          );
        })}
      </>
      ),
    },    
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: '2',
      align: 'right' 
    },
];
const data = [
    {
        key: 'totalcollected',
        label: ['Total Collected'],
        amount: '$1200.00',
    },
    {
        key: 'cash',
        label: ['Cash'],
        amount: '$200.00'
    },
    {
        key: 'card',
        label: ['Card'],
        amount: '$800.00'
    },
    {
        key: 'wallet',
        label: ['Wallet'],
        amount: '$200.00'
    },
    {
        key: 'other',
        label: ['Other'],
        amount: '$0.00'
    },
    {
        key: 'fees',
        label: ['Fees'],
        amount: '$10.00'
    },        
    {
        key: 'nettotal',
        label: ['Net Total'],
        amount: '$1210.00'
    },
  ];
const Paymentmethodslist = () => {
    return (        
        <Table columns={columns} dataSource={data} pagination={false}  className="paymentcollectedTable"/> /*scroll={{ x: 1500 }} */
    )
}
export default Paymentmethodslist;