import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import UserDashboard from "./Pages/UserDashboard";
import Error404 from "./Components/Error/Error404";
import PrivateRoute from "./Components/PrivateRoute";
import { postToken } from "./callAPI";
import { useDispatch } from "react-redux";
import { handleUserProfile } from "./Redux/features/profil";
import { userLogin } from "./Redux/features/login";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('---in App---', localStorage.getItem("token"))
    const token = localStorage.getItem("token")
    if (token) {
      postToken(token)
        .then(async (response) => {
          dispatch(handleUserProfile(response.data.body));
          dispatch(userLogin(token));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user-dashboard" element={<PrivateRoute component={UserDashboard} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
