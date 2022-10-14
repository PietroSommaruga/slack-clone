import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';


function Login() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    };

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.fit_lim.size_1200x630.v1569479844.jpg" alt="" />
            <h1>Sign in</h1>
            <p>slack.com</p>
            <Button onClick={signIn}>Sing in with google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;

    
`;

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

> img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}
> button {
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    margin-top: 30px;
}


`;