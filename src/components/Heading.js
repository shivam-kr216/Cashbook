import React from 'react';

const Heading = () => {
    return (
        <div className="heading">
            <div className="header">
                <h1>My Cashbook</h1>
            </div>
            <div className="balance">
                <p style={{color: "green"}}><b>0 &#8377;</b></p>
                <p style={{color:"#808080"}}><b>Today's Balance</b></p>
            </div>
        </div>
    )
}

export default Heading;