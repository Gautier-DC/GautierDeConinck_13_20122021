import React from 'react';
import styled from 'styled-components';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from '../utils/style/colors';

const SignInContainer = styled.form`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`

const SignInButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: #fff;
` 

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    
    label {
        font-weight: bold;
    }
    
    input {
        padding: 5px;
        font-size: 1.2rem;
    }
`

const InputRemember = styled.div`
    display: flex;
        
    label {
        margin-left: 0.25rem;
    }
`


function SignIn() {

    return (
        <main style={{backgroundColor: `${colors.bgcolor}`}}>
            <SignInContainer>
                <FontAwesomeIcon icon={faUserCircle} style={{fontSize: '5rem'}}/>
                <h1>Sign In</h1>
                <form>
                    <InputWrapper>
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </InputWrapper>
                    <InputWrapper>
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </InputWrapper>
                    <InputRemember>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </InputRemember>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <SignInButton type="submit">Sign In</SignInButton>
                    {/* <!-- SHOULD BE THE BUTTON BELOW href="./user.html" -->
                    <!-- <button class="sign-in-button">Sign In</button> -->
                    <!--  --> */}
                </form>
            </SignInContainer>
        </main>
    )
}

export default SignIn;