
import React from 'react';

import Container from 'react-bootstrap/Container';

import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';

import '../css/style.css';


function App() {
  return (
    <Container>
      <div className="App">
        {/* <LoginPage /> */}
        <Dashboard />
      </div>
    </Container>

  );
}

export default App;
