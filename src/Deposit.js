import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './action/index';
import {Button} from 'react-bootstrap';

function Deposit() {
    const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
    return (
        <div style={{backgroundImage:`url("https://cdn.wallpapersafari.com/1/65/1A74vD.jpg")`}}>
            <div style={{padding:"50px"}}>
            <h1>Deposit your Money here</h1>
            <h1>Current Value: {myState}</h1>
                <input className="amount" type="text" value={myState}></input><br/><br/>
                <Button variant="dark" onClick={()=>dispatch(incNumber())}>Deposit Some Amount</Button>
                </div>
        </div>
    )
}

export default Deposit
