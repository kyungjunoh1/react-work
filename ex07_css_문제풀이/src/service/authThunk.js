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
        const exists = data_set.find(data => data.username === user.username);
        if(exists) {
            return { result: 1, message: "이미 존재하는 사용자입니다" };
        }
        data_set.push({
            username: user.username,
            password: user.password,
            role: "USER"
        });

        return { result: 0, username: user.username };
    }
);

export const allMemberListThunk = createAsyncThunk(
    "allMember",
    async () => data_set
);

export const getMemberThunk = createAsyncThunk(
    "getMember",
    async() => {
      return data_set.map(member => ({
      username: member.username,
      password: "111",
      role: member.role
    }));
  } 
);

export const getMemberByIdThunk = createAsyncThunk(
  "getMemberByIdThunk",
  async (username) => {
    const member = data_set.find(data => data.username === username);
    if (!member) {
      throw new Error("사용자를 찾을 수 없습니다");
    }
    return { ...member };
  }
);

export const deleteMemberThunk = createAsyncThunk(
    "deleteMember",
    async(username) => {
        const index = data_set.findIndex(data => data.username === username);
        
        if (index === -1) {
      throw new Error("사용자를 찾을 수 없습니다");
    }
    data_set.splice(index, 1);
    return { username };
  }
);

export const updateMemberThunk = createAsyncThunk(
    "updateMember",
    async ({ username, updatedData }) => {
    const index = data_set.findIndex(data => data.username === username);
    if (index === -1) {
      throw new Error("사용자를 찾을 수 없습니다");
    }
    
    data_set[index] = {
      ...data_set[index],
       password: updatedData.password ? updatedData.password : data_set[index].password,
       role: updatedData.role ? updatedData.role : data_set[index].role
    }; 
    
    return { ...data_set[index] };
  }
);