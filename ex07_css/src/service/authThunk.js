import { createAsyncThunk } from "@reduxjs/toolkit";

let data_set = [
{username:"aaa",password :"aaa", role : "USER"},
{username:"bbb",password :"bbb", role : "USER"},
{username:"ccc",password :"ccc", role : "USER"},
]
export const loginThunk = createAsyncThunk(
"loginThunk", 
async ( user ) => {
const data = data_set.filter(data => data.username === user.username )[0]
let result = 1;
if( data?.password === user.password )
result = 0;
return {result, username:user.username}; //성공 0, 실패 1
}
);

export const registerThunk = createAsyncThunk(
    "registerThunk",
    async(user) => {
        console.log(user);
        const exists = data_set.find(d => d.username === user.username);
        if(exists) {
            return { result: 1};
        }
        data_set.push({
            username: user.username,
            password: user.password,
            role: "USER"
        });

        return { result: 0 };
    }
);