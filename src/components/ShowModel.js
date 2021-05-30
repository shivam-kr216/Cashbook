import React, {useState} from 'react';
import Modal from 'react-modal';

const ShowModel = ({ isOpen, toggleModal, value, submit1, submit2}) => {
    const [amount, setAmount] = useState("");
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            appElement={document.getElementsByClassName('App')}
            contentLabel="My dialog"
            className="mymodal"
        >
            <button onClick={toggleModal}>Close</button>
            <h4 style={{ textAlign: "center" }}>New Entry</h4>
            <input type="text" placeholder="&#8377; 0.00" value={amount} onChange={e => setAmount(e.target.value)} /><br /><br />
            <textarea id="notes" name="notes" rows="4" cols="50" placeholder="Enter Note" />

            {value === "In" ?
                <button style={{
                    backgroundColor: "green", width: "100px", height: "25px",
                    float: "right"
                }} 
                onClick={()=>submit1(amount)}>In</button> :
                <button style={{
                    backgroundColor: "red", width: "100px", height: "25px",
                    float: "right"
                }}
                onClick={()=>submit2(amount)}
                >Out</button>
            }
        </Modal>
    )
}

export default ShowModel;