import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../utils/style/colors";
import { userLogout } from "../../Redux/features/login";

//CSS Part

const SrOnly = styled.h1`
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

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: ${colors.activeLink};
  }
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    width: 200px;
  }
`;

const NavItem = styled(Link)`
  margin-right: 0.5rem;

  :hover {
    text-decoration: underline;
  }
`;

//Function Part

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.login.isLogged);
  const userFirstName = useSelector((state) => state.profile.firstName);

  const handleLogOut = () => {
    dispatch(userLogout());
    navigate("/");
  };

  console.log("log status", logged);

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
        <SrOnly>Argent Bank</SrOnly>
      </HeaderLogo>
      <nav>
        {logged === "true" ? (
          <>
            <NavItem to="/user-dashboard">
              <FontAwesomeIcon icon={faUserCircle} />
              {userFirstName}
            </NavItem>
            <NavItem onClick={handleLogOut}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </NavItem>
          </>
        ) : (
          <>
            <NavItem to="/sign-in">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </NavItem>
          </>
        )}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
