import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './action/index';

function Home() {
    const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
    return (
        <div style={{backgroundImage:`url("https://i.pinimg.com/736x/15/3a/45/153a4535df6cf2d2b106a558b750c486.jpg")`}}>
            <div style={{padding:"50px"}}>
                    <h1>Fake Bank</h1>
                    <h2>We use Redux here to create Fake Bank App.</h2>
                    <h3>Here you can Deposit or Withdraw Your Amount just by simple click.</h3>
                </div>
                <div>
                    <h1>Your Balance is</h1>
                    <input className="amount" type="text" value={myState}></input>
                </div>
                <div style={{color:"#1d2327"}}>
                <h1>This is a Fake bank application which is created by Pankaj here I use Redux.</h1>
                <h2>There is simple functionality in the app, here we have two option:</h2>
                <h3>1.Deposit Amount (100 rs. will be deposited)</h3>
                <h3>2. Withdraw Amount (50 rs. will be deducted)</h3>
                </div>
        </div>
    )
}

export default Home
