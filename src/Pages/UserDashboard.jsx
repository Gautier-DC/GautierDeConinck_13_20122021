import React from "react";
import { useSelector } from "react-redux";
import colors from "../utils/style/colors";
import Accounts from "../Components/Accounts";
import HeroDashboard from "../Components/HeroDashboard";
import { Navigate } from "react-router-dom";

function UserDashboard() {
  const logged = useSelector((state) => state.login.isLogged);

  return (
    <main style={{ backgroundColor: `${colors.bgcolor}`, height: "auto", padding: '2em 0' }}>
      {!logged ? (
        <Navigate to="/sign-in" />
      ) : (
        <>
          <HeroDashboard />
          <Accounts />
        </>
      )}
    </main>
  );
}

export default UserDashboard;
