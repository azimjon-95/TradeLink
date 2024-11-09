import { createSlice } from "@reduxjs/toolkit";

export const modalTypeSlice = createSlice({
  name: "modalType",
  initialState: null,
  reducers: {
    setModalType: (state, action) => (state = action.payload),
  },
});

export const { setModalType } = modalTypeSlice.actions;
