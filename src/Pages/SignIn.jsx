import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch} from 'react-redux'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from '../utils/style/colors';
import { postLogin } from '../callAPI'
import { userLogin } from '../Redux/features/login';


//CSS Part

const SignInContainer = styled.section`
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


//Function part

function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        postLogin(userName,userPassword)
        .then( async response => {
            dispatch(userLogin(response.data.token))
            navigate('/user-dashboard')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <main style={{backgroundColor: `${colors.bgcolor}`}}>
            <SignInContainer>
                <FontAwesomeIcon icon={faUserCircle} style={{fontSize: '5rem'}}/>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <InputWrapper>
                        <label for="username">Username</label>
                        <input type="text" id="username" onChange={e => setUserName(e.target.value)} />
                    </InputWrapper>
                    <InputWrapper>
                        <label for="password">Password</label>
                        <input type="password" id="password" onChange={e => setUserPassword(e.target.value)}/>
                    </InputWrapper>
                    <InputRemember>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </InputRemember>
                    <SignInButton type="submit">Sign In</SignInButton>
                </form>
            </SignInContainer>
        </main>
    )
}

export default SignIn;