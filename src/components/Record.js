import React from 'react';

const Record = ({ d }) => {
    console.log(d.timestamp);
    return (
        <div className="record">
            <div className="addIn">{d.timestamp}</div>
            <div className="addOut">{d.inAmout}</div>
            <div className="addIn">{d.outAmount}</div>
        </div>
    )
}

export default Record;