import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const SrOnly = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const AccountContainer = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;

    @media (min-width: 720px) {
      flex-direction: row;
    }
` 

const AccountContentWrapper =  styled.div`
    width: 100%;
    flex: 1;
` 

const ContentWrapperCta =  styled(AccountContentWrapper)`
    @media (min-width: 720px) {
      flex: 0;
    }
` 

const AccountTitle =  styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
` 

const AccountAmount =  styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
` 

const AmountDescription =  styled.p`
    margin: 0;
`

const TransactionBtn =  styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: #fff;

    @media (min-width: 720px) {
        width: 200px;
    }
` 

function Accounts(){

    const accountsInfo = [
        {name: "Argent Bank Checking (x8349)", balance: "$2,082.79", description: "Available"},
        {name: "Argent Bank Savings (x6712)", balance: "$10,928.42", description: "Available"},
        {name: "Argent Bank Credit Card (x8349)", balance: "$184.30", description: "Current"},
    ]

    return(
        <section>
            <SrOnly>Accounts</SrOnly>
            {
                accountsInfo.map((account, index) => {
                    return (
                        <AccountContainer key={'account' + index}>
                            <AccountContentWrapper>
                                <AccountTitle>{account.name}</AccountTitle>
                                <AccountAmount>{account.balance}</AccountAmount>
                                <AmountDescription>{`${account.description} Balance`}</AmountDescription>
                            </AccountContentWrapper>
                            <ContentWrapperCta>
                                <TransactionBtn>View transactions</TransactionBtn>
                            </ContentWrapperCta>
                        </AccountContainer>
                    )
                })
            }
        </section>
    )
}

export default Accounts;