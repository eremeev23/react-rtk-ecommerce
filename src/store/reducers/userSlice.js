import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        id: '1',
        name: "Maxim",
        email: "test@mail.com",
        password: "123123"
      }
    ],
    logedUser: false
  },
  reducers: {
    SIGN_UP(state, action) {
      state.users.push({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password
      })
    },

    LOG_IN(state, action) {
      state.logedUser = action.payload
    }
  }
})

export const { SIGN_UP, LOG_IN } = userSlice.actions;

export default userSlice.reducer