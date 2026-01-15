import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username : "",
    password : ""
};

const inputSlice = createSlice({
    name : 'input',
    initialState,
    reducers: {
        setInput: (state, action) => {
        const {name, value} = action.payload;
        state[name] = value;
        },
        resetInput: (state) => {
            state.username = "";
            state.password = "";
        }
    }
});

export const {setInput, resetInput} = inputSlice.actions;
export default inputSlice;