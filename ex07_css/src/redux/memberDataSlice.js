import { createSlice } from "@reduxjs/toolkit";
import { allMemberListThunk, deleteMemberThunk, getMemberByIdThunk, updateMemberThunk } from "../service/authThunk";
import { commonLoadingHandlers } from "./commonLoadingHandlers";

const memberDataSlice = createSlice({
    name: "memberData",
    initialState: {
        currentMember: null,
        loading: false,
        members: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(allMemberListThunk.fulfilled, (state, action) => {
            state.members = action.payload;
          })
          .addCase(getMemberByIdThunk.fulfilled, (state, action) => {
      state.currentMember = action.payload;
          })
          .addCase(deleteMemberThunk.fulfilled, (state, action) => {
            state.currentMember = null;
          })
          .addCase(updateMemberThunk.fulfilled, (state, action) => {
            state.currentMember = null;
          })
          commonLoadingHandlers(builder, allMemberListThunk);
          commonLoadingHandlers(builder, getMemberByIdThunk);
          commonLoadingHandlers(builder, deleteMemberThunk);
          commonLoadingHandlers(builder, updateMemberThunk);
    }
});
export const { clearSelectedMember } = memberDataSlice.actions;
export default memberDataSlice;