import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: ""
  },
  reducers: {
    setEmailUser: (state, action) => {
      state.email = action.payload;
      window.localStorage.setItem("userEmail", action.payload);
    }
  }
});

export const { setEmailUser } = userSlice.actions;

export default userSlice.reducer;

export const selectEmailUser = (state) => state.user.email;
