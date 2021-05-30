import React, { useState } from 'react';

const CashContext = React.createContext();

export const CashProvider = ({ children }) => {
    const [cash, setCash] = useState([]);

    const addIn = (inAmount, callback) => {
        //console.log(inAmount);
        setCash([
            ...cash, {
                timestamp: Date().toLocaleString(),
                outAmount: "",
                inAmount: parseInt(inAmount),
                //amount: parseInt(this.amount)+parseInt(inAmount) 
            }]
        )
        callback();
    };

    const addOut = (outAmount) => {
         setCash([
            ...cash, {
                timestamp: Date().toLocaleString(),
                outAmount: parseInt(outAmount),
                inAmount: '',
                //amount: parseInt(cash.amount)-parseInt(outAmount)   
            }
        ])
    }

    return (
        <CashContext.Provider value={{ data: cash, addIn, addOut }}>
            {children}
        </CashContext.Provider>
    );
}

export default CashContext;
