import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import memberDataSlice from "./memberDataSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        input: inputSlice.reducer,
        memberData: memberDataSlice.reducer,
        auth : authSlice.reducer
    }
})
export default store;