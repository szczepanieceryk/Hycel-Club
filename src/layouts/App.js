
import React from 'react';

import Container from 'react-bootstrap/Container';

import LoginPage from '../pages/LoginPage';

import '../css/style.css';

function App() {
  return (
    <Container>
      <div className="App">
        <LoginPage />
      </div>
    </Container>
  );
}

export default App;
