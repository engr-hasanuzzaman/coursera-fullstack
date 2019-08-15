import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Home</NavbarBrand>
        </div>
      </Navbar>
      <Menu></Menu>
    </div>
  );
}

export default App;
