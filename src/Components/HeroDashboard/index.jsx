import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { putEditProfil } from "../../callAPI";
import { handleUserProfile } from "../../Redux/features/profil";
import { useToken, useFirstName, useLastName } from "../../CustomHooks";

//CSS Part

const HeroContent = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #fff;
`;

const GreenButton = styled.button`
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: #fff;
  font-weight: bold;
  padding: 10px;
  min-width: 130px;
`;

const SaveButton = styled.button`
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: #fff;
  font-weight: bold;
  padding: 10px;
  min-width: 130px;
  margin-bottom: 1em;
  @media (min-width: 414px) {
    margin-right: 1.5em;
    margin-bottom: 0em;
  }
`;

const RedButton = styled.button`
  border-color: #d63031;
  background-color: #d63031;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  min-width: 130px;
`;

const EditContainer = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-basis: 48%;
  }

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 414px) {
    display: flex;
    flex-direction: row;
  }
`;

// Function part

function HeroDashboard() {
  const dispatch = useDispatch();
  const userToken = useToken();
  const userFirstName = useFirstName();
  const userLastName = useLastName();

  const [editing, setEditing] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState(userFirstName);
  const [updatedLastName, setUpdatedLastName] = useState(userLastName);
  const [serverError, setServerError] = useState(false);
  
  //function to switch between view and editing mode
  const handleEdit = () => {
    setEditing((prevState) => !prevState);
  };

  //When you submit the formular, update the profile on database then update it in store and switch from editing mode
  const handleSubmit = (e) => {
    e.preventDefault();
    putEditProfil(userToken, updatedFirstName, updatedLastName)
      .then(async (response) => {
        dispatch(handleUserProfile(response.data.body));
        setEditing((prevState) => !prevState);
      })
      .catch((error) => {
        console.log(error);
        setServerError(!serverError);
      });
  };

  //Avoid anonymous function in formular
  const updtFirstname = (e) => setUpdatedFirstName(e.target.value);
  const updtLastname = (e) => setUpdatedLastName(e.target.value);

  return (
    <HeroContent>
      {editing ? (
        <>
          <Title> Set your profile</Title>
          <EditContainer>
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <InputWrapper>
                  <label htmlFor="firstName"></label>
                  <input placeholder={userFirstName} type="text" id="firstName" onChange={updtFirstname} />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="lastName"></label>
                  <input placeholder={userLastName} type="text" id="lastName" onChange={updtLastname} />
                </InputWrapper>
              </InputContainer>
              <ButtonWrapper>
                <SaveButton type="submit">Save</SaveButton>
                <RedButton onClick={handleEdit}>Cancel</RedButton>
              </ButtonWrapper>
            </form>
          </EditContainer>
        </>
      ) : (
        <>
          <Title>
            Welcome back
            <br />
            {userFirstName} {userLastName} !
          </Title>
          <GreenButton onClick={handleEdit}>Edit Name</GreenButton>
        </>
      )}
    </HeroContent>
  );
}
export default HeroDashboard;
