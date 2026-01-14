import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import memberDataSlice from "./memberDataSlice";

const store = configureStore({
   reducer : {
    //input = {login:{id, pwd}}
    input : inputSlice.reducer,
    memberData : memberDataSlice.reducer
   }
});
export default store;