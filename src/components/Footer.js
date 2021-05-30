import React from 'react';

const Footer = ({Submit}) => {
    return (
        <div className="footer">
            <button style={{backgroundColor: "red"}} onClick={() => Submit("Out")}>Out</button>
            <button style={{backgroundColor: "green"}} onClick={() => Submit("In")}>IN</button>
        </div>
    )
}

export default Footer;