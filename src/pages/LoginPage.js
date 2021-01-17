import React from 'react';

import ValidatedLoginForm from '../layouts/ValidatedLoginForm';

import Navigation from '../layouts/Navigation';


const LoginPage = () => {
    return (
        <>
            <Navigation />
            <ValidatedLoginForm />
        </>
    );
}

export default LoginPage;