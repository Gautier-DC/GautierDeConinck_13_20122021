import { configureStore } from "@reduxjs/toolkit";
import loginReducer  from "./features/login";
import profileReducer from "./features/profil"

export const store = configureStore({
    reducer: {
        login: loginReducer,
        profile: profileReducer,
    },
})