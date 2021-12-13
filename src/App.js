import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './action/index';
import {Navbar, Nav, Container} from 'react-bootstrap';
import Home from './Home';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Fake Bank Created By @Pankaj</Navbar.Brand>
    <Nav className="me-auto" style={{position:"absolute", right:"69px"}}>
      <Nav.Link >
        <Link to="/" style={{ textDecoration: "none", color:"grey"}}>Home</Link>
        </Nav.Link>
      <Nav.Link>
        <Link to="/withdraw" style={{ textDecoration: "none", color:"grey"}}>Withdraw Your Money</Link>
        </Nav.Link>
      <Nav.Link>
        <Link to="/deposit" style={{ textDecoration: "none", color:"grey"}}>Deposit You Money</Link>
        </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/withdraw" element={<Withdraw/>}></Route>
  <Route exact path="/deposit" element={<Deposit/>}></Route>
  </Routes>
  </Router>
    </div>
  );
}

export default App;
