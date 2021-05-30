import React, { useState, useContext } from 'react';
import Heading from './Heading';
import Body from './Body';
import Footer from './Footer';
import ShowModel from './ShowModel';
import CashContext from '../context/CashContext';
import Records from './Records';

const Homepage = () => {
    const { data, addIn, addOut } = useContext(CashContext);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    function toggleModal(val) {
        setIsOpen(!isOpen);
        setValue(val);
    }
    //console.log(data);
    return (
        <React.Fragment>
            <ShowModel isOpen={isOpen} toggleModal={toggleModal} value={value} 
            submit1={(amount)=>addIn(amount, toggleModal)}
            submit2={(amount)=>addOut(amount, toggleModal)}
             />
            <Heading />
            {!data.length ?
                <Body /> :
                <Records data={data} />
            }
            <Footer Submit={val => toggleModal(val)} />
        </React.Fragment>
    )
}

export default Homepage;