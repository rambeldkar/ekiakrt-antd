import React from 'react';
import { Select} from 'antd';
const { Option } = Select;
const selectOnChange = (value) => {
    console.log(`selected ${value}`);
}
const Selectsummary = (props) => {
    return ( 
        <Select defaultValue={props.selectvalue}
            style={{ width: 150,margin:'0 10px' }}
            optionFilterProp="children"
            onChange={selectOnChange}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="Summary">Summary</Option>
            <Option value="Daily">Daily</Option>
            <Option value="Weekly">Weekly</Option>
            <Option value="Monthly">Monthly</Option>
        </Select>
    );
}
export default Selectsummary;