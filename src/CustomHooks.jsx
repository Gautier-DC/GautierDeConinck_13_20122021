import { useSelector } from "react-redux";

//Custom hook to access logged state
function useLogged() {
  const logged = useSelector((state) => state?.login?.isLogged);

  return logged;
}

//Custom hook to return the user token
function useToken() {
  const token = useSelector((state) => state.login.token);

  return token;
}

//Custom hook to return the user first name
function useFirstName() {
  const firstName = useSelector((state) => state.profile.firstName);

  return firstName;
}

//Custom hook to return the user last name
function useLastName() {
  const lastName = useSelector((state) => state.profile.lastName);

  return lastName;
}

export { useLogged, useToken, useFirstName, useLastName };
