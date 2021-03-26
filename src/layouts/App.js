
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Page from './Page';

import '../styles/style.scss';

function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <Page />
        </div>
      </Container>
    </Router>
  );
}

export default App;
