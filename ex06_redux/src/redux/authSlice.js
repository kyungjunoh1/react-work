import { createSlice } from "@reduxjs/toolkit";
const initialState = {isLoggedIn : false, username : null}
const savedAuth = sessionStorage.getItem("auth");
const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth ? JSON.parse(savedAuth) : initialState ,
    reducers : {
        login : (state, action)=>{
          state.isLoggedIn = true;
          state.username = action.payload.username
          sessionStorage.setItem("auth", JSON.stringify({...state}))
        },
        logout : (state) => {
            //state = {...initialState}
          //state.isLoggedIn = false;
          //state.username = null;
            sessionStorage.clear();
            return initialState
        }
    }
});
export const {login, logout} = authSlice.actions
export default authSlice;