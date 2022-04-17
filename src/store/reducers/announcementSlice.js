import { createSlice } from "@reduxjs/toolkit";

const announcementState = createSlice({
  name: 'popular',
  initialState: {
    announcement: true
  },
  reducers: {
    closeAnnouncement(state, action) {
      console.log(action);

      state.announcement = false;
    }
  }
})

export const { closeAnnouncement } = announcementState.actions;

export default announcementState.reducer