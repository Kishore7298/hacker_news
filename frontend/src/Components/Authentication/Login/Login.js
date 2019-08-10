import React from 'react';

import LoginSignupCompo from '../LoginSignupCompos/LoginSignupCompos';
import LoginPart from './LoginPart';

const Login = () => {
    return (
        <LoginSignupCompo title="Login to Comment system">
            <LoginPart />
        </LoginSignupCompo>
    )
}

export default Login;