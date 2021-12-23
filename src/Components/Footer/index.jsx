import React from 'react';
import styled from 'styled-components';

  
const FooterContainer = styled.header`
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;

    p {
        margin: 0;
        padding: 0;
    }
` 

function Footer(){

    return(
    <FooterContainer>
      <p>Copyright 2020 Argent Bank</p>
    </FooterContainer>
    )
}

export default Footer;
