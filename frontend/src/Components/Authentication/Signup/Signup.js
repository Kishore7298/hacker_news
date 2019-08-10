import React from 'react';

import LoginSignupCompose from '../LoginSignupCompos/LoginSignupCompos';
import SignupPart from './SignupPart';

const Signup = ()=>{
    return (
        <LoginSignupCompose title="Sign up for Comment system">
            <SignupPart />
        </LoginSignupCompose>
    )
}

export default Signup;