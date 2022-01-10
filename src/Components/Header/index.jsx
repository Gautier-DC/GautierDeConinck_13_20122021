import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../utils/style/colors";
import { userLogout } from "../../Redux/features/login";
import { useLogged } from "../../CustomHooks";

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

const FontAwIcon = styled(FontAwesomeIcon)`
  margin-right: 0.3em;
  font-size: 1.3em;
`

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

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavItem = styled(Link)`
  margin-right: 1.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    text-decoration: underline;
  }
`;

//Function Part

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useLogged();
  const userFirstName = useSelector((state) => state?.profile?.firstName);

  //Log out and return to home page
  const handleLogOut = () => {
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
        <SrOnly>Argent Bank</SrOnly>
      </HeaderLogo>
      <nav>
        {logged ? (
          <NavContainer>
            <NavItem to="/user-dashboard">
              <FontAwIcon icon={faUserCircle} />
              {userFirstName}
            </NavItem>
            <NavItem to="/" onClick={handleLogOut}>
              <FontAwIcon icon={faSignOutAlt} />
              Sign Out
            </NavItem>
          </NavContainer>
        ) : (
          <NavContainer>
            <NavItem to="/sign-in">
              <FontAwIcon icon={faUserCircle} />
              Sign In
            </NavItem>
          </NavContainer>
        )}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
