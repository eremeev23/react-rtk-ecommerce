import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        id: 1,
        name: "Maxim",
        email: "test@mail.com",
        password: "123123"
      }
    ]
  },
  reducers: {
    signUp(state, action) {
      state.users.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password
      })
    }
  }
})

export const { signUp } = userSlice.actions;

export default userSlice.reducer