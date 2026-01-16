import {createSlice} from '@reduxjs/toolkit';

const inputSlice = createSlice({
    name : 'input',
    initialState: {username: "", password: ""},
    reducers: {
        setInput: (state, action) => {
        state[action.payload.name] = action.payload.value;
        }
    }
});

export const {setInput, resetInput} = inputSlice.actions;
export default inputSlice;