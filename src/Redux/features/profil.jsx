import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { 
    _id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    createdAt: "",    
    updatedAt: "",
    _v: 0    
}

export const profileSlice = createSlice({
    name: "profile",
    initialState: initialStateValue,
    reducers: {
        handleUserProfile: (state, action) => {
            const profilData = action.payload;
            state._id = profilData._id
            state.email = profilData.email
            state.password = profilData.password
            state.firstName = profilData.firstName
            state.lastName = profilData.lastName
            state.createdAt = profilData.createdAt
            state.updatedAt = profilData.updatedAt
        }
    },
});

export const { handleUserProfile } = profileSlice.actions
export default profileSlice.reducer