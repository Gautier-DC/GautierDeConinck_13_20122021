import React from "react";
import colors from "../utils/style/colors";
import Accounts from "../Components/Accounts";
import HeroDashboard from "../Components/HeroDashboard";

function UserDashboard() {

  return (
    <main style={{ backgroundColor: `${colors.bgcolor}`, height: "auto", padding: '2em 0' }}>
          <HeroDashboard />
          <Accounts />
    </main>
  );
}

export default UserDashboard;
