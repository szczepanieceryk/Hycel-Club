
import React from 'react';

import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import Page from './Page';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import '../css/style.css';


function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <LoginPage />
          <Dashboard />
        </div>
      </Container>
    </Router>
  );
}

export default App;
