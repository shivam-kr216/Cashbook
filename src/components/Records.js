import React from 'react';
import Record from './Record';

const Records = ({ data }) => {
    return (
        <div className="records">
            {data.map((d, index) => <Record key={index} d={d} /> )}
        </div>
    )
}

export default Records;