import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { commonLoadingHandlers } from "./commonLoadingHandlers";

const initialState = { 
    isLoggedIn: false,
    username: null,
    loading: false,
    error: null,
    result: 0
};

const savedAuth = sessionStorage.getItem("auth");

const authSlice = createSlice({
    name : "auth",
    initialState: savedAuth ? JSON.parse(savedAuth) : initialState,
    reducers: {
        logout: (state) => {
            sessionStorage.clear();
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.fulfilled, (state, action) => {
            const {result, username} = action.payload;
            state.loading = false;
            state.result = result;

            if(result === 0){
                state.isLoggedIn = true;
                state.username = username;
                sessionStorage.setItem("auth", JSON.stringify(state));
            }
        });
        builder
        .addCase(registerThunk.fulfilled, (state, action) => {
            state.loading =false;
            state.result = action.payload.result;
        })
        commonLoadingHandlers(builder, loginThunk);
        commonLoadingHandlers(builder, registerThunk);
    }
});
export const { logout } = authSlice.actions;
export default authSlice;