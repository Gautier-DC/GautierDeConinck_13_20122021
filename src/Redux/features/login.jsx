import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isLogged: false, token: ""}

export const loginSlice = createSlice({
    name: "login",
    initialState: initialStateValue,
    reducers: {
        userLogin: (state, action) => {
            state.isLogged = true
            state.token = action.payload
        },
        userLogout: (state) => {
            state.isLogged = false
            state.token = ""
        }
    },
});

export const { userLogin, userLogout } = loginSlice.actions
export default loginSlice.reducer