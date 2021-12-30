import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import Accounts from '../Components/Accounts';

const HeroContent = styled.div`
    color: #fff;
    margin-bottom: 2rem;
` 

const EditButton =  styled.button`
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: #fff;
    font-weight: bold;
    padding: 10px;
` 

function UserDashboard(){

    const dispatch = useDispatch()
    const userToken = useSelector(state => state.login.token)
    const userFirstName = useSelector(state => state.profile.firstName)
    const userLastName = useSelector(state => state.profile.lastName)

    console.log("dashboard token", userToken);

    return(
        <main style={{backgroundColor: `${colors.bgcolor}`, height: 'auto'}}>
            <HeroContent>
                <h1>Welcome back<br />{userFirstName} {userLastName}!</h1>
                <EditButton>Edit Name</EditButton>
            </HeroContent>
            <Accounts />
        </main>
    )
}

export default UserDashboard;