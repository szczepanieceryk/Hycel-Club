import React from 'react';

import Container from 'react-bootstrap/Container';

import ValidatedLoginForm from '../layouts/ValidatedLoginForm';
import Navigation from '../layouts/Navigation';

const LoginPage = () => {
    return (
        <Container>
            <div className="login-wrapper">
                <Navigation />
                <ValidatedLoginForm />
            </div>
        </Container>
    );
}

export default LoginPage;