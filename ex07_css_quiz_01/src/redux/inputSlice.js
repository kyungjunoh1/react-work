import {createSlice} from "@reduxjs/toolkit"
const inputSlice = createSlice({
    name: "input",
    initialState : {
        login : {username:"", password:""},
        register : {username:"", password:"", role:""},
        modify : {username:"", password:"", role:""}
    },
    reducers: {
        changeInput : (state, action) => {
            //state[action.payload.form][action.payload.name] = action.payload.value or 아래
            const {form, name, value} = action.payload
            state[form][name] = value
        },
        setModifyData: (state, action) => {
            console.log("action : ", action)
            state.modify = action.payload;
        }
    }
})
//inputSlice.actions.changeInput() or 아래
export const {changeInput, setModifyData} = inputSlice.actions;
export default inputSlice;