import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { putEditProfil } from "../../callAPI";
import { handleUserProfile } from "../../Redux/features/profil";

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
  width: 600px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

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
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 60%;
`;

// Function part

function HeroDashboard() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.login.token);
  const userFirstName = useSelector((state) => state.profile.firstName);
  const userLastName = useSelector((state) => state.profile.lastName);

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

  return (
    <HeroContent>
      {editing ? (
        <>
          <Title> Set your profile</Title>
          <EditContainer>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                <label htmlFor="firstName">Change my first name for :</label>
                <input type="text" id="firstName" onChange={(e) => setUpdatedFirstName(e.target.value)} />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="lastName">Change my last name for :</label>
                <input type="text" id="lastName" onChange={(e) => setUpdatedLastName(e.target.value)} />
              </InputWrapper>
              <ButtonWrapper>
                <GreenButton type="submit">Save</GreenButton>
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
