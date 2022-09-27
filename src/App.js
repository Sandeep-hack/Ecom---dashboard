
import './App.css';
import React from 'react';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Ecom. website</h1> <br /><br />

      <h3>Login Page</h3><br />
      <input type="text" placeholder='Enter user id' /> <br /><br />
      <input type="text" placeholder='Enter user password' /> <br /> <br />
      <Button>Login</Button>
    </div>
  );
}

export default App;
