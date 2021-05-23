import React from 'react';
import { Empty} from 'antd';

const Emptymsg = (props) => {
    return ( 
        <Empty className="emptyMessageBox" style={{ margin: '70px 0px' }}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            imageStyle={{
            height: 100,
            border: '2px solid #ddd',
            padding:15,
            width: 100,
            borderRadius: '50%',
            margin: 'auto',
            marginBottom: '15px'
            }}
            description={
            <span>
                <h3>{props.emptytitle}</h3>
                <p>{props.emptydescription}</p>
            </span>
            }
        />
    )
}

export default Emptymsg