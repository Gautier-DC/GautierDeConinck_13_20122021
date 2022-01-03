import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../utils/style/colors";
import { postLogin, postToken } from "../callAPI";
import { userLogin } from "../Redux/features/login";
import { handleUserProfile } from "../Redux/features/profil";

//CSS Part

const SignInContainer = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
`;

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

const InputRemember = styled.div`
  display: flex;

  label {
    margin-left: 0.25rem;
  }
`;

//Function part

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.login.isLogged);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  // When you submit form, post email and password then use token to load the profile
  // If there is no token then go to error 404
  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(userName, userPassword)
      .then(async (loginResponse) => {
        const token = loginResponse?.data?.body?.token;
        if (token) {
          postToken(token)
            .then(async (response) => {
              dispatch(handleUserProfile(response.data.body));
              dispatch(userLogin(token));
              navigate("/user-dashboard");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log('no token detected')
          navigate("/error");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.status);
      });
  };
  return (
    <main style={{ backgroundColor: `${colors.bgcolor}`, height: "auto", padding: '2em 0'}}>
      {logged ? (
        <p style={{ color: "#fff" }}>Vous êtes connecté</p>
      ) : (
        <SignInContainer>
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "4rem" }} />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              {error ? <span>{error}</span> : ""}
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={(e) => setUserName(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setUserPassword(e.target.value)} />
            </InputWrapper>
            <InputRemember>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </InputRemember>
            <SignInButton type="submit">Sign In</SignInButton>
          </form>
        </SignInContainer>
      )}
    </main>
  );
}

export default SignIn;