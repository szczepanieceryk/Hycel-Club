import React from 'react';

import Container from 'react-bootstrap/Container';

import LoginForm from './LoginForm';

const LoginPage = () => {
    return (
        <Container>
            <div className="login-wrapper">
                <LoginForm />
            </div>
        </Container>
    );
}

export default LoginPage;